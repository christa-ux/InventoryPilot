from django.http import JsonResponse
from .models import Inventory

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
            elif 50 <= qty <= 100:
                item['status'] = 'Moderate'
            else:
                item['status'] = 'High'
        return JsonResponse(inventory_list, safe=False)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
