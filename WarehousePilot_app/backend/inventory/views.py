from django.http import JsonResponse
from .models import Inventory
from django.core.mail import send_mail
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
import json
from django.middleware.csrf import get_token

# def send_alert(item):
#     send_mail(
#         'Low Stock Alert',
#         f'The stock for {item["sku_color_id"]} is low. Current quantity: {item["qty"]}.',
#         'wp.notifs@gmail.com',
#         ['warehousepilot2024@gmail.com'],
#         fail_silently=False,
#     )

def get_inventory(request):
    try:
        inventory_data = Inventory.objects.all().values()
        inventory_list = list(inventory_data)
        low_stock_items = []
        for item in inventory_list:
            qty = item['qty']
            if qty == 0:
                item['status'] = 'Out of Stock'
            elif qty < 50:
                item['status'] = 'Low'
                low_stock_items.append(item)
                # send_alert(item)
            elif 50 <= qty <= 100:
                item['status'] = 'Moderate'
            else:
                item['status'] = 'High'
        return JsonResponse({"inventory": inventory_list, "low_stock_items": low_stock_items}, safe=False)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

@csrf_exempt
@require_POST
def delete_inventory_items(request):
    try:
        data = json.loads(request.body)
        item_ids = data.get('item_ids', [])
        Inventory.objects.filter(inventory_id__in=item_ids).delete()
        return JsonResponse({"message": "Items deleted successfully"}, status=200)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

def get_csrf_token(request):
    return JsonResponse({'csrfToken': get_token(request)})
