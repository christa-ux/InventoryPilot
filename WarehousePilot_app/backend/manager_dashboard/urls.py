from django.urls import path
from .views import home, ProfileView, SKUAlertAPIView

urlpatterns = [
    path('', home, name='home'),
    path('profile/', ProfileView.as_view(), name='profile'),
    path('api/sku-alerts/', SKUAlertAPIView.as_view(), name='sku_alerts'),
]
