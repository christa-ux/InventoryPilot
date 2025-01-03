from django.urls import path

from . import views
from .views import OrdersView


urlpatterns = [
    path("ordersview/", OrdersView.as_view(), name="ordersview"),

]