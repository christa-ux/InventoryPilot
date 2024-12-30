from django.urls import path

from . import views
from .views import InventoryView

urlpatterns = [
    path("", views.get_inventory, name="get_inventory"),
    path("inventorypreview/", InventoryView.as_view(), name="inventorypreview"),
]