# Generated by Django 5.0.2 on 2024-02-12 06:38

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0002_alter_item_category"),
    ]

    operations = [
        migrations.AlterField(
            model_name="item",
            name="sku",
            field=models.CharField(max_length=50, unique=True),
        ),
    ]