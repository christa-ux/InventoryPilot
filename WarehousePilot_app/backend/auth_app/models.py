from django.db import models

from django.db import models

class users(models.Model):
    user_id = models.AutoField(primary_key=True)               # Primary key
    username = models.CharField(max_length=20, unique=True)    # Username with unique constraint
    password_hash = models.CharField(max_length=255)           # Hashed password
    role = models.CharField(max_length=20)                     # Role (e.g., admin, user)
    dob = models.DateField()                                   # Date of Birth
    email = models.EmailField(unique=True)                     # Email with unique constraint

    def __str__(self):
        return self.username