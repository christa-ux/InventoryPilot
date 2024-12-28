from django.http import JsonResponse
from .models import Inventory

def get_inventory(request):
    try:
        inventory_data = Inventory.objects.all().values()
        return JsonResponse(list(inventory_data), safe=False)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
