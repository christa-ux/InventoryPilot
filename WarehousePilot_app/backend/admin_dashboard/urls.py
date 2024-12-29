from django.urls import path, include
from .views import ManageUsersView, home, AddUserView

urlpatterns = [
    path('', home, name='home'),
    path('manage_users/', ManageUsersView.as_view(), name='manage_users'),
    path('add_user/', AddUserView.as_view(), name='add_user')
]