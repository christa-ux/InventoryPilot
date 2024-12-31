from django.urls import path
from .views import ManageUsersView, AddUserView, EditUserView

urlpatterns = [
    path('manage_users/', ManageUsersView.as_view(), name='manage_users'),
    path('add_user/', AddUserView.as_view(), name='add_user'),
    path('edit_user/<int:user_id>/', EditUserView.as_view(), name='edit_user'),
]
