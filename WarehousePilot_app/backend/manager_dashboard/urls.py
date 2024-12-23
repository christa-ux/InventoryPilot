from django.urls import path
from .views import home, ProfileView, SKUAlertAPIView

urlpatterns = [
    path('', home, name='home'),  # Maps '/' to the home view
    path('profile/', ProfileView.as_view(), name='profile'),  # Maps '/profile/' to ProfileView
    path('api/sku-alerts/', SKUAlertAPIView.as_view(), name='sku_alerts'),  # Maps '/api/sku-alerts/' to SKUAlertAPIView
]
