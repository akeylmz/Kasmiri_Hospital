# Generated by Django 5.0.6 on 2024-12-14 20:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hospital', '0029_rename_stock_wharehouse_stock_stock_warehouse'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='WhareHouse',
            new_name='WareHouse',
        ),
        migrations.RenameField(
            model_name='order',
            old_name='order_wharehouse',
            new_name='order_warehouse',
        ),
    ]
