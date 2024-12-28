from django.urls import path

from .views import InventoryView

urlpatterns = [
    path("inventorypreview/", InventoryView.as_view(), name="inventorypreview"),
]