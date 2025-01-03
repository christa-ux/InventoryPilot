from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import users

class EditUserTests(APITestCase):
    def setUp(self):
        # Create a user who will perform the edit operations
        self.editor_user = users.objects.create_user(
            username='editoruser',
            email='editoruser@example.com',
            password='editorpassword',
            role='admin',
            dob='1985-05-15',
            first_name='Editor',
            last_name='User',
            department='Editing',
        )
        # Create a user who will be the target of edit operations
        self.target_user = users.objects.create_user(
            username='targetuser',
            email='targetuser@example.com',
            password='targetpassword',
            role='staff',
            dob='1990-01-01',
            first_name='Target',
            last_name='User',
            department='Targeting',
        )
        # Log in to get an access token
        self.login_url = reverse('login')
        login_data = {
            'username': 'editoruser',
            'password': 'editorpassword'
        }
        response = self.client.post(self.login_url, login_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK, "Login failed in setUp.")
        self.access_token = response.data.get('access')

        # Set up the URLs for editing
        self.edit_user_url = reverse('edit_user', kwargs={'user_id': self.target_user.user_id})

    def test_get_user_success(self):
        """
        Ensure that an authenticated user can retrieve details of another user.
        """
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {self.access_token}')
        response = self.client.get(self.edit_user_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['username'], 'targetuser')
        self.assertEqual(response.data['email'], 'targetuser@example.com')
        self.assertEqual(response.data['role'], 'staff')
        self.assertEqual(response.data['first_name'], 'Target')
        self.assertEqual(response.data['last_name'], 'User')
        self.assertEqual(response.data['department'], 'Targeting')

    def test_get_user_not_found(self):
        """
        Ensure that requesting a non-existent user returns a 404 error.
        """
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {self.access_token}')
        url = reverse('edit_user', kwargs={'user_id': 9999})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(response.data['error'], 'User not found')

    def test_get_user_unauthenticated(self):
        """
        Ensure that an unauthenticated user cannot retrieve user details.
        """
        response = self.client.get(self.edit_user_url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_update_user_success(self):
        """
        Ensure that an authenticated user can update another user's details.
        """
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {self.access_token}')
        update_data = {
            'first_name': 'UpdatedFirstName',
            'last_name': 'UpdatedLastName',
            'department': 'UpdatedDepartment',
        }
        response = self.client.put(self.edit_user_url, update_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['message'], 'User updated successfully')

        # Verify that the user's details have been updated
        self.target_user.refresh_from_db()
        self.assertEqual(self.target_user.first_name, 'UpdatedFirstName')
        self.assertEqual(self.target_user.last_name, 'UpdatedLastName')
        self.assertEqual(self.target_user.department, 'UpdatedDepartment')

    def test_update_user_invalid_data(self):
        """
        Ensure that providing invalid data results in a 400 error.
        """
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {self.access_token}')
        invalid_data = {
            'email': 'not-an-email'  # Invalid email format
        }
        response = self.client.put(self.edit_user_url, invalid_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('email', response.data)

    def test_update_user_not_found(self):
        """
        Ensure that updating a non-existent user returns a 404 error.
        """
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {self.access_token}')
        url = reverse('edit_user', kwargs={'user_id': 9999})
        update_data = {
            'first_name': 'ShouldNotWork'
        }
        response = self.client.put(url, update_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(response.data['error'], 'User not found')

    def test_update_user_unauthenticated(self):
        """
        Ensure that an unauthenticated user cannot update user details.
        """
        update_data = {
            'first_name': 'ShouldNotWork'
        }
        response = self.client.put(self.edit_user_url, update_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)


class DeleteUserTests(APITestCase):
    def setUp(self):
        # Create a user who will perform the delete operations
        self.deleter_user = users.objects.create_user(
            username='deleteruser',
            email='deleteruser@example.com',
            password='deleterpassword',
            role='deleter',
            dob='1980-08-08',
            first_name='Deleter',
            last_name='User',
            department='Deleting',
        )
        # Create a user who will be the target of delete operations
        self.target_user = users.objects.create_user(
            username='targetuser',
            email='targetuser@example.com',
            password='targetpassword',
            role='user',
            dob='1990-01-01',
            first_name='Target',
            last_name='User',
            department='Targeting',
        )
        # Log in to get an access token
        self.login_url = reverse('login')
        login_data = {
            'username': 'deleteruser',
            'password': 'deleterpassword'
        }
        response = self.client.post(self.login_url, login_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK, "Login failed in setUp.")
        self.access_token = response.data.get('access')

        # Set up the URLs for deleting
        self.delete_user_url = reverse('delete_user', kwargs={'user_id': self.target_user.user_id})

    def test_delete_user_success(self):
        """
        Ensure that an authenticated user can delete another user.
        """
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {self.access_token}')
        response = self.client.delete(self.delete_user_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['message'], 'User deleted successfully')

        # Verify that the user has been deleted
        with self.assertRaises(users.DoesNotExist):
            users.objects.get(user_id=self.target_user.user_id)

    def test_delete_user_not_found(self):
        """
        Ensure that deleting a non-existent user returns a 404 error.
        """
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {self.access_token}')
        url = reverse('delete_user', kwargs={'user_id': 9999})
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(response.data['error'], 'User not found')

    def test_delete_user_unauthenticated(self):
        """
        Ensure that an unauthenticated user cannot delete a user.
        """
        response = self.client.delete(self.delete_user_url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
