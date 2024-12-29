from django.urls import path
from .views import ManageUsersView, home

urlpatterns = [
    path('', home, name='home'),
    path('manage_users/', ManageUsersView.as_view(), name='manage_users')
]