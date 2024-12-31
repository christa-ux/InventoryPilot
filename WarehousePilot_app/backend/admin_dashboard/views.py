from django.shortcuts import render, HttpResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, BasePermission
from rest_framework_simplejwt.authentication import JWTAuthentication
from auth_app.models import users
from .serializers import StaffSerializer


# Create your views here.
def home(request):
    return HttpResponse("Hello, World!")

# IsAdminUser: Allows access to admin users
class IsAdminUser(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.role == 'admin'

# Manage Users: Retrieve all of the platform
class ManageUsersView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated, IsAdminUser]

    def get(self, request):
        try:
            staffData = users.objects.all()
            serializer = StaffSerializer(staffData, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({"error": str(e)}, status=500)

# Adding Users:  Retrieve user input and add to database
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