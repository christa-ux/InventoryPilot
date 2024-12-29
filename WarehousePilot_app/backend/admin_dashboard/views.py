from django.shortcuts import render, HttpResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from auth_app.models import users
from .serializers import StaffSerializer


# Create your views here.
def home(request):
    return HttpResponse("Hello, World!")

# Manage Users: Retrieve all of the platform
class ManageUsersView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            staffData = users.objects.all()
            serializer = StaffSerializer(staffData, many=True)
            return Response(serializer.data)
        
        except Exception as e:
            return Response({"error": str(e)}, status=500)