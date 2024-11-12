from django.shortcuts import render, HttpResponse
from rest_framework_simplejwt.tokens import AccessToken
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import staff

# Create your views here.
def users(self, request):
    if request.method == "GET":
        context = { staff.objects.all() }
        return render(request, "user_table_template.html", context)
    elif request.method == "POST":
        # user = AccessToken.access_token_obj['user'] 
        return        
