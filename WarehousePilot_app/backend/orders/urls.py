from django.urls import path
from .views import GenerateInventoryAndManufacturingListsView

from . import views

urlpatterns = [
    path('generateLists/', GenerateInventoryAndManufacturingListsView.as_view(), name="generateLists"),
]