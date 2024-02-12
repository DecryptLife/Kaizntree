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
    tags = serializers.PrimaryKeyRelatedField(many=True, queryset=Tag.objects.all())
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())
    class Meta:
        model = Item
        fields = ['id','sku','name','category', 'tags', 'in_stock', 'available_stock']

    def create(self, validated_data):
        # Pop tags data from the validated data since it's a many-to-many field
        tags_data = validated_data.pop('tags', None)
        
        # Create the Item instance
        item = Item.objects.create(**validated_data)

        # If tags were provided, set them for the item
        if tags_data is not None:
            item.tags.set(tags_data)

        return item
