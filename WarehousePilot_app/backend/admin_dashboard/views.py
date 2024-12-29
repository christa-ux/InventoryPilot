from django.shortcuts import render, HttpResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from auth_app.models import users

def home(request):
    return HttpResponse("Hello, World!")

class ProfileView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            user = request.user
            # print(f"Request user: {user}")  
            # print(f"User type: {type(user)}")  

            user_data = {
                'username': user.username,
                'email': user.email,
                'role': getattr(user, 'role', 'N/A'),  
                'first_name': getattr(user, 'first_name', 'N/A'),
                'last_name': getattr(user, 'last_name', 'N/A'),
                'department': getattr(user, 'department', 'N/A'),
            }
            return Response(user_data)
        except Exception as e:
            return Response({"error": str(e)}, status=500)

class AddUserView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            # Checking if user exists before inserting
            data = request.data
            print(data)
            if users.objects.filter(email=data['email']).exists(): # checks using email - userid instead?
                return Response({"error": "User with this email already exists"}, status=400)
            else:
                print("Creating user")
                user = users.objects.create_user(
                    username=data['username'],
                    password = data['password'],
                    email=data['email'],
                    role=data['role'],
                    first_name=data['first_name'],
                    last_name=data['last_name'],
                    department=data['department'],
                    dob = data['dob']
                )
                return Response({"message": "User created successfully"})
        except Exception as e:
            return Response({"error": str(e)}, status=500)
