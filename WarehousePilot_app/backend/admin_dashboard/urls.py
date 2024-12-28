from django.urls import path
from .views import ManageUsersView, home, ProfileView

urlpatterns = [
    path('', home, name='home'),
    path('profile/', ProfileView.as_view(), name='profile'),
    path('manage_users/', ManageUsersView.as_view(), name='manage_users')
]