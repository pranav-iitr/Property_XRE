# Generated by Django 5.0.2 on 2024-05-22 02:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0003_alter_properties_plot_no'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='unit',
            name='photo',
        ),
    ]
