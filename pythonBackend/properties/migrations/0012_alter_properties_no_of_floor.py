# Generated by Django 5.0.2 on 2024-07-29 04:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0011_remove_owner_unit_unit_owner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='properties',
            name='no_of_floor',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]
