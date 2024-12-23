from rest_framework import serializers
from auth_app.models import users

class StaffSerializer(serializers.ModelSerializer):
    class Meta:
        model = users
        fields = '__all__'
