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

    # setUp(): Set up objects to be used in the tests
    def setUp(self):
        self.admin_user = users.objects.create_user(
            first_name='Test',
            last_name='Admin',
            username="admin",
            password="adminpassword",
            email="admin@example.com",
            dob='1990-01-01',
            department='Testing',
            role='admin',
            is_staff=False
        )

        self.staff_user = users.objects.create_user(
            first_name='Test',
            last_name='Employee',
            username="employee",
            password="employeepassword",
            email="employee@example.com",
            dob='2025-12-29',
            department='Testing',
            role='user',
            is_staff=True
        )

        self.manage_users_url = reverse('manage_users')

        self.client = APIClient()

    # test_manage_users_authenticated_request(): Expected behaviour when an admin accesses the page
    def test_manage_users_authenticated_request(self):
        # Arrange
        staff_data = users.objects.all()
        serializer = StaffSerializer(staff_data, many=True)
        refresh = RefreshToken.for_user(self.admin_user)
        self.client.credentials(HTTP_AUTHORIZATION=f"Bearer {refresh.access_token}")
        # Act
        response = self.client.get(self.manage_users_url)
        # Assert
        self.assertEqual(response.status_code, status.HTTP_200_OK) # check if authorized to be on this page
        self.assertEqual(response.data, serializer.data) # check if page retrieves all entries from the database
    
    # test_manage_users_non_admin_user_request(): Handling of a non-authorized role (not an admin)
    def test_manage_users_non_admin_user_request(self):
        # Arrange
        refresh = RefreshToken.for_user(self.staff_user)
        self.client.credentials(HTTP_AUTHORIZATION=f"Bearer {refresh.access_token}")

        # Act
        response = self.client.get(self.manage_users_url)

        # Assert
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
        self.assertEqual(response.data, {'detail': 'You do not have permission to perform this action.'})