# Generated by Django 5.0.2 on 2024-05-22 01:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='properties',
            name='created_by',
        ),
        migrations.AlterField(
            model_name='properties',
            name='features',
            field=models.ManyToManyField(blank=True, null=True, to='properties.features'),
        ),
    ]
