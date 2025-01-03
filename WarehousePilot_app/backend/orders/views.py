from django.shortcuts import render
from rest_framework.views import APIView
from django.http import HttpResponse
from rest_framework.response import Response
from .models import Orders, OrderPart
from inventory.models import Inventory, InventoryPicklist, InventoryPicklistItem
from parts.models import Part
from manufacturingLists.models import ManufacturingLists, ManufacturingListItem

#generates an inventory picklist and a maufacturing list of an order once the order is "started"
class GenerateInventoryAndManufacturingListsView(APIView):
    def post(self, request):
        orderID = request.data.get("orderID")
        print("GenerateInventoryAndManufacturingListsView")
        print(f"Response OrderID: {orderID}")
        order = Orders.objects.get(order_id=orderID)
        print(f'retrieved order: {order.__dict__}')
        
        orderParts = OrderPart.objects.filter(order_id=order)
        print("Order Parts:")
        for op in orderParts:
            print(op.__dict__)

        orderPartSkuColor = orderParts.values('sku_color')
        print("Order Parts SKU COLORS:")
        for sku in orderPartSkuColor:
            print(sku)

        inventory = Inventory.objects.filter(sku_color__in=orderPartSkuColor, qty__gt = 0)
        print("Matching parts in inventory with a quantity greater than 0:")
        for i in inventory:
            print(i.__dict__)

        print(f"inventory.count(): {inventory.count()}")
        if inventory.exists() == True:
            inventoryPicklist = InventoryPicklist.objects.create(status = False, order_id=order)
            inventoryPicklistItems = []
            for i in inventory:
                skuValue = i.__getattribute__("sku_color")
                picklistQty = min(OrderPart.objects.get(order_id=order, sku_color=skuValue).__getattribute__("qty"), i.__getattribute__('qty'))
                print(picklistQty)
                inventoryPicklistItems.append(InventoryPicklistItem(picklist_id = inventoryPicklist, sku_color=skuValue, amount = picklistQty, status = False))
            InventoryPicklistItem.objects.bulk_create(inventoryPicklistItems)
            #print(InventoryPicklistItem.objects.all())
        if inventory.count() != orderParts.count():
            manuList = ManufacturingLists.objects.create(status = 'In Progress', order_id=order)
        
        
        
        #manuListItems = ManufacturingListItem.objects.
        


        '''
        for p in Part.objects.all():
            print(p.__dict__)
        for i in Inventory.objects.all():
            print(i.__dict__)
        for op in OrderPart.objects.all():
            print(op.__dict__)
        '''
        return Response({'testResponse':'success'})