from django.db import models
from parts.models import Part
from orders.models import Orders
# Create your models here.

class ManufacturingLists(models.Model):
    manufacturing_list_id = models.AutoField(primary_key=True)
    order_id = models.ForeignKey(Orders, on_delete=models.CASCADE)
    status = models.CharField(max_length=255)

class ManufacturingListItem(models.Model):
    MANUFACTURING_PROCESSES={
        "cutting" : "cutting",
        "bending" : "bending",
        "painting" :  "painting",
        "completed" : "completed",
        "cutting QA": "cuttingQA",
        "bending QA" : "bendingQA",
        "painting QA" :  "paintingQA"
    }
    PROGRESS_STAGES={
        "ToDo" : "To Do",
        "In Progress" : "In Progress",
        "Completed" : "Completed"
    }
    manufacturing_list_item_id = models.AutoField(primary_key=True)
    manufacturing_list_id = models.ForeignKey(ManufacturingLists, on_delete=models.CASCADE)
    sku_color = models.ForeignKey(Part, on_delete=models.CASCADE)
    amount = models.IntegerField()
    manufacturing_process=models.CharField(null=True, max_length=25, choices=MANUFACTURING_PROCESSES)
    process_progress = models.CharField(null=True, max_length=25, choices=PROGRESS_STAGES)
