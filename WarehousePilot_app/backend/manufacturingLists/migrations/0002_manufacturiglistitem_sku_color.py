# Generated by Django 5.1.3 on 2024-12-17 23:53

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('manufacturingLists', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='manufacturiglistitem',
            name='sku_color',
            field=models.CharField(default=django.utils.timezone.now, max_length=255),
            preserve_default=False,
        ),
    ]
