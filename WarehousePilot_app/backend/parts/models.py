from django.db import models

# Create your models here.
class Part(models.Model):
    sku = models.CharField(max_length=255, primary_key=True)
    old_sku = models.CharField(max_length=255, null=True)
    description = models.TextField(null=True)
    sku_color = models.CharField(max_length=255, null=True)
    old_sku_color = models.CharField(max_length=255, null=True)
    qty_per_box = models.IntegerField(null=True)
    weight = models.IntegerField(null=True)
    length = models.IntegerField(null=True)
    lbs1400 = models.IntegerField(null=True)
    crate_size = models.IntegerField(null=True)
    image =  models.ImageField(null=True)
