from django.urls import path

from .views import InventoryView

urlpatterns = [
    path("inventorypreview/", InventoryView.as_view(), name="inventorypreview"),
    path("", views.get_inventory, name="get_inventory"),
]