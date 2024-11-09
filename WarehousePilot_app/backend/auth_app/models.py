from django.db import models

class users(models.Model):
    user_id = models.AutoField(primary_key=True)               
    username = models.CharField(max_length=20, unique=True)    
    password_hash = models.CharField(max_length=255)           
    role = models.CharField(max_length=20)                     
    dob = models.DateField()                                   
    email = models.EmailField(unique=True)                     

    def __str__(self):
        return self.username