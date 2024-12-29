from django.urls import path, include
from .views import  AddUserView

urlpatterns = [
    # path('', home, name='home'),
    path('add_user/', AddUserView.as_view(), name='add_user'),
=========
from .views import home

urlpatterns = [
    path('', home, name='home'),
>>>>>>>>> Temporary merge branch 2
]