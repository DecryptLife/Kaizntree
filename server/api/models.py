from django.db import models

# Create your models here.
class Tag(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
    
class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    

class Item(models.Model):
    sku = models.CharField(max_length=50)
    name = models.CharField(max_length=100)
    tags = models.ManyToManyField(Tag)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, blank=True)
    in_stock = models.IntegerField()
    available_stock = models.IntegerField()

    def __str__(self):
        return f"{self.sku} - {self.name} - {self.in_stock} - {self.available_stock}"