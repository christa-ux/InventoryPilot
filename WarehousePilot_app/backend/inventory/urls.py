from django.urls import path

from . import views

urlpatterns = [
    path("", views.get_inventory, name="get_inventory"),
    path("delete", views.delete_inventory_items, name="delete_inventory_items"),
    path("csrf-token", views.get_csrf_token, name="get_csrf_token"),
]