from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APITestCase
from .models import Orders, OrderPart
from inventory.models import Inventory
from parts.models import Part


# Create your tests here.
class GenerateListsTests(APITestCase):
    def setUp(self):
        order = Orders.objects.create(order_id = 12345)
        Part.objects.bulk_create(
            [
                Part(sku_color='1Test'),
                Part(sku_color='2Test'),
                Part(sku_color='3Test'),
            ]
        )
        for p in Part.objects.all():
            print(p.sku_color)
        p = Part.objects.all()
        Inventory.objects.bulk_create(
            [
                Inventory(location = 'loc1Test', sku_color = p[0], qty=10, warehouse_number = 'TestHouse', amount_needed = 0),
                Inventory(location = 'loc2Test', sku_color = p[1], qty=5, warehouse_number = 'TestHouse', amount_needed = 0),
            ]
        )
        OrderPart.objects.bulk_create(
            [
                OrderPart(order_id = order, sku_color = p[0], qty = 10),
                OrderPart(order_id = order, sku_color=p[1], qty = 10),
                OrderPart(order_id = order, sku_color=p[2], qty = 10),
            ]
        )

    def test_generate_lists(self):
        url = reverse('generateLists')
        response = self.client.post(url, {'orderID' : '12345'}, format='json')
        print('test_generate_lists test case')
        print(response.data)
