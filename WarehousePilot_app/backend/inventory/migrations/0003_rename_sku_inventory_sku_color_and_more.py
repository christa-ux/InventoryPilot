# Generated by Django 5.1.3 on 2024-12-19 20:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0002_rename_amount_neeeded_inventory_amount_needed'),
    ]

    operations = [
        migrations.RenameField(
            model_name='inventory',
            old_name='sku',
            new_name='sku_color',
        ),
        migrations.RenameField(
            model_name='inventorypicklistitem',
            old_name='sku',
            new_name='sku_color',
        ),
    ]
