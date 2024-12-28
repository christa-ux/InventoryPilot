from django.urls import path, include
from .views import home, ProfileView, AddUserView

urlpatterns = [
    path('', home, name='home'),
    path('profile/', ProfileView.as_view(), name='profile'),
    path('add_user/', AddUserView.as_view(), name='add_user'),
    
]