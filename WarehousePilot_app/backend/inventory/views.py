from django.http import JsonResponse
from .models import Inventory
from django.core.mail import send_mail

def send_alert(item):
    send_mail(
        'Low Stock Alert',
        f'The stock level for {item["sku_color_id"]} is low. Current quantity: {item["qty"]}',
        'from@example.com',
        ['to@example.com'],
        fail_silently=False,
    )

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
                send_alert(item)  # Trigger alert for low stock
            elif 50 <= qty <= 100:
                item['status'] = 'Moderate'
            else:
                item['status'] = 'High'
        return JsonResponse(inventory_list, safe=False)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
