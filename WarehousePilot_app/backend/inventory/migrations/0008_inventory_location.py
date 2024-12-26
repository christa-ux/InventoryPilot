# Generated by Django 5.1.3 on 2024-12-23 19:55

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0007_rename_location_inventory_inventory_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='inventory',
            name='location',
            field=models.CharField(default=django.utils.timezone.now, max_length=255),
            preserve_default=False,
        ),
    ]
