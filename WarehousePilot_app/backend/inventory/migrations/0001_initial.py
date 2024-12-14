# Generated by Django 5.1.3 on 2024-12-14 16:33

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth_app', '0001_initial'),
        ('orders', '0001_initial'),
        ('parts', '0002_alter_part_crate_size_alter_part_description_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Inventory',
            fields=[
                ('location', models.CharField(max_length=255, primary_key=True, serialize=False)),
                ('qty', models.IntegerField()),
                ('warehouse_number', models.IntegerField()),
                ('amount_neeeded', models.IntegerField()),
                ('sku', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='parts.part')),
            ],
        ),
        migrations.CreateModel(
            name='InventoryPicklist',
            fields=[
                ('picklist_id', models.AutoField(primary_key=True, serialize=False)),
                ('status', models.BooleanField()),
                ('assigned_employee_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='auth_app.users')),
                ('order_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='orders.orders')),
            ],
        ),
        migrations.CreateModel(
            name='InventoryPicklistItem',
            fields=[
                ('picklist_item_id', models.AutoField(primary_key=True, serialize=False)),
                ('amount', models.IntegerField()),
                ('status', models.BooleanField()),
                ('location', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='inventory.inventory')),
                ('picklist_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='inventory.inventorypicklist')),
                ('sku', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='parts.part')),
            ],
        ),
    ]
