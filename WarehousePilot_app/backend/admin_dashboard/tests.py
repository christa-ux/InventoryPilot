from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from django.urls import reverse
from django.contrib.auth import get_user_model
from auth_app.models import users
from .serializers import StaffSerializer

User = get_user_model()

class ManageUsersViewTest(TestCase):
    def setUp(self):
        self.admin_user = users.objects.create_user(
            first_name='Test',
            last_name='Admin',
            username="admin",
            password="adminpassword",
            email="admin@example.com",
            dob='1990-01-01',
            department='Testing',
            role='admin'
        )

        self.staff_user = users.objects.create_user(
            first_name='Test',
            last_name='Employee',
            username="employee",
            password="employeepassword",
            email="employee@example.com",
            dob='2025-12-29',
            department='Testing',
            role='user'
        )

        # link to manage users feature
        self.manage_users_url = reverse('manage_users')

        # create API client
        self.client = APIClient()

        # create token for admin user
        refresh = RefreshToken.for_user(self.admin_user)
        self.client.credentials(HTTP_AUTHORIZATION=f"Bearer {refresh.access_token}")