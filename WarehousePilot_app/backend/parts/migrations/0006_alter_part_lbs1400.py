# Generated by Django 5.1.3 on 2024-12-18 02:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('parts', '0005_alter_part_crate_size'),
    ]

    operations = [
        migrations.AlterField(
            model_name='part',
            name='lbs1400',
            field=models.FloatField(null=True),
        ),
    ]