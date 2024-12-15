from django.db import models
from orders.models import Orders
# Create your models here.
class Report(models.Model):
    report_id = models.AutoField(primary_key=True)
    order_id = models.ForeignKey(Orders, on_delete=models.CASCADE)
    description = models.TextField(null=True)