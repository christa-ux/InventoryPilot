from django.urls import path
from .views import home, ProfileView, UserListView, AddUserView

urlpatterns = [
    path('', home, name='home'),
    path('profile/', ProfileView.as_view(), name='profile'),
    path('add_user/', AddUserView.as_view(), name='add_user'),
]