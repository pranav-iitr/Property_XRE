# Generated by Django 5.0.2 on 2024-07-29 02:18

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0010_owner_spoc_alter_owner_unit'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='owner',
            name='unit',
        ),
        migrations.AddField(
            model_name='unit',
            name='Owner',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='properties.owner'),
        ),
    ]
