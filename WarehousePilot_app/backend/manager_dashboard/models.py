from django.db import models
from inventory.models import Inventory

class Alert(models.Model):
    inventory_item = models.ForeignKey(Inventory, on_delete=models.CASCADE)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Alert for {self.inventory_item.sku.sku} at {self.inventory_item.location}"

