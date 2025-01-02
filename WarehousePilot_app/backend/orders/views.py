from django.shortcuts import render
from rest_framework.views import APIView
from django.http import HttpResponse
from rest_framework.response import Response
from .models import Orders, OrderPart
from inventory.models import Inventory
from parts.models import Part

#generates an inventory picklist and a maufacturing list of an order once the order is "started"
class GenerateInventoryAndManufacturingListsView(APIView):
    def post(self, request):
        orderID = request.data.get("orderID")
        print("GenerateInventoryAndManufacturingListsView")
        print(f"Response OrderID: {orderID}")
        order = Orders.objects.get(order_id=orderID)
        print(f'retrieving order {order.__dict__}')

        
        '''
        for p in Part.objects.all():
            print(p.__dict__)
        for i in Inventory.objects.all():
            print(i.__dict__)
        for op in OrderPart.objects.all():
            print(op.__dict__)
        '''
        return Response({'testResponse':'success'})