from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ItemViewSet, CategoryViewSet

router = DefaultRouter()
router.register(r'items', ItemViewSet)
router.register(r'category', CategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]