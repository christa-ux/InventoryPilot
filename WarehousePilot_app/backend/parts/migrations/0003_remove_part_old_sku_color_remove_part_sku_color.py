# Generated by Django 5.1.3 on 2024-12-17 23:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('parts', '0002_alter_part_crate_size_alter_part_description_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='part',
            name='old_sku_color',
        ),
        migrations.RemoveField(
            model_name='part',
            name='sku_color',
        ),
    ]
