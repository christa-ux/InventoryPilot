from django.test import TestCase, Client
from django.urls import reverse
from .models import Inventory
from parts.models import Part
import json

class InventoryTests(TestCase):
    def setUp(self):
        self.client = Client()
        self.part = Part.objects.create(
            sku_color='ALOE 01',
            sku='ALOE',
            description='Aloe Part Description'
        )
        self.inventory_item = Inventory.objects.create(
            location="TEST",
            sku_color=self.part,
            qty=100,
            warehouse_number="499 B",
            amount_needed=50
        )

    def test_get_inventory(self):
        response = self.client.get(reverse('get_inventory'))
        self.assertEqual(response.status_code, 200)
        self.assertIn('inventory', response.json())
        inventory_data = response.json()['inventory']
        self.assertEqual(len(inventory_data), 1)
        self.assertEqual(inventory_data[0]['location'], self.inventory_item.location)
        self.assertEqual(inventory_data[0]['qty'], self.inventory_item.qty)
        self.assertEqual(inventory_data[0]['warehouse_number'], self.inventory_item.warehouse_number)
        self.assertEqual(inventory_data[0]['amount_needed'], self.inventory_item.amount_needed)

    def test_add_inventory_item(self):
        data = {
            "location": "Test ADD",
            "sku_color_id": self.part.sku_color,
            "qty": 200,
            "warehouse_number": "499 B",
            "amount_needed": 100
        }
        response = self.client.post(reverse('add_inventory_item'), json.dumps(data), content_type="application/json")
        self.assertEqual(response.status_code, 201)
        self.assertIn('message', response.json())
        self.assertEqual(response.json()['message'], "Item added successfully")
        
        new_item = Inventory.objects.get(location="Test ADD")
        self.assertEqual(new_item.qty, 200)
        self.assertEqual(new_item.warehouse_number, "499 B")
        self.assertEqual(new_item.amount_needed, 100)

    def test_delete_inventory_items(self):
        item_ids = [self.inventory_item.inventory_id]
        data = {"item_ids": item_ids}
        response = self.client.post(reverse('delete_inventory_items'), json.dumps(data), content_type="application/json")
        self.assertEqual(response.status_code, 200)
        self.assertIn('message', response.json())
        self.assertEqual(response.json()['message'], "Items deleted successfully")
        
        with self.assertRaises(Inventory.DoesNotExist):
            Inventory.objects.get(inventory_id=self.inventory_item.inventory_id)
