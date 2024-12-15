from django.urls import path
from .views import home, ProfileView

urlpatterns = [
    path('', home, name='home'),
    path('profile/', ProfileView.as_view(), name='profile'),
]