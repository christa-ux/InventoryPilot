from django.urls import path
from .views import home, ProfileView, ChangePasswordView

urlpatterns = [
    path('', home, name='home'),
    path('profile/', ProfileView.as_view(), name='profile'),
    path('change_password/', ChangePasswordView.as_view(), name='change_password'),
]