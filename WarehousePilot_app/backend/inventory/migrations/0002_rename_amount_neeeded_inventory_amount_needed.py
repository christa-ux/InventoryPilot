# Generated by Django 5.1.3 on 2024-12-14 16:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='inventory',
            old_name='amount_neeeded',
            new_name='amount_needed',
        ),
    ]