from django.db import models

import sys, os
sys.path.append(os.path.abspath(os.path.join(os.path.pardir, 'auth_app')))
from auth_app.models import users as users_table

class staff(models.Model):
    user_id = models.AutoField(primary_key=True)               
    first_name = models.CharField(max_length=100)
    last_name= models.CharField(max_length=100)
    staff_id = users_table.user_id
    user_id = users_table.user_id
    email = users_table.email
    role = users_table.role
    designation = models.CharField(max_length=100)