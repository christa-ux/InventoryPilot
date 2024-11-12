from django.shortcuts import render, HttpResponse

import sys, os
sys.path.append(os.path.abspath(os.path.join(os.path.pardir, 'auth_app')))
from auth_app.models import users as users_table

# Create your views here.
def users(request):
    retrieved_users_table = users_table.objects.all()
    user_ids = []
    for user in retrieved_users_table:
        user_ids.append(user.user_id)
    response_string = ' '.join(str(user_ids))
    return HttpResponse(response_string)

def get(self, request):
    retrieved_users_table = users_table.objects.all()
