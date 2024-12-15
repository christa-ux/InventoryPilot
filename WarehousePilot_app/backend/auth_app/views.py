from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from rest_framework import status
from django.contrib.auth.hashers import check_password
from .models import users

class LoginView(APIView):
    permission_classes = []

    def post(self, request):
            username = request.data.get("username")
            password = request.data.get("password")

            print(f"Username: {username}")
            print(f"Password: {password}")

            # Django built-in authentication
            user = authenticate(username=username, password=password)

            if user is not None:
                refresh = RefreshToken.for_user(user)
                return Response({
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                    'user': {
                        'username': user.username,
                        'role': user.role,
                        'dob': user.dob,
                        'email': user.email,
                        'first_name': user.first_name,
                        'last_name': user.last_name,
                        'department': user.department
                    }
                })
            else:
                return Response({"detail": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)