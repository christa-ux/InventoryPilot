from django.urls import path
from .views import home, SKUAlertAPIView

urlpatterns = [
    path('', home, name='home'),   
    path('api/sku-alerts/', SKUAlertAPIView.as_view(), name='sku_alerts'),  
]

