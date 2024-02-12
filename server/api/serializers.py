from rest_framework import serializers
from .models import Tag, Category, Item

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id','tag']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'category']


class ItemSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Item
        fields = ['id','sku','name','category', 'tags', 'in_stock', 'available_stock']

        
