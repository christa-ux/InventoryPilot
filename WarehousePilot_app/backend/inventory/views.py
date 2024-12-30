from django.http import JsonResponse
from .models import Inventory
from django.core.mail import send_mail
from threading import Thread
import logging

alerted_items = set()

def send_alert(item):
    if item["sku_color_id"] not in alerted_items:
        def send_email():
            try:
                send_mail(
                    'Low Stock Alert',
                    f'The stock for {item["sku_color_id"]} is low. Current quantity: {item["qty"]}.',
                    'wp.notifs@gmail.com',
                    ['warehousepilot2024@gmail.com'],
                    fail_silently=False,
                )
            except Exception as e:
                logging.error(f"Failed to send email for {item['sku_color_id']}: {e}")
        Thread(target=send_email).start()
        alerted_items.add(item["sku_color_id"])

def get_inventory(request):
    try:
        inventory_data = Inventory.objects.all().values()
        inventory_list = list(inventory_data)
        for item in inventory_list:
            qty = item['qty']
            if qty == 0:
                item['status'] = 'Out of Stock'
            elif qty < 50:
                item['status'] = 'Low'
                send_alert(item)
            elif 50 <= qty <= 100:
                item['status'] = 'Moderate'
            else:
                item['status'] = 'High'
        return JsonResponse(inventory_list, safe=False)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
