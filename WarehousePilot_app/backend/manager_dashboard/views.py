from django.shortcuts import render, HttpResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from auth_app.models import users
from manager_dashboard.utils import check_sku_alerts
from rest_framework import status
from django.contrib.auth import update_session_auth_hash

# Create your views here.
def home(request):
    return HttpResponse("Hello, World!")

class SKUAlertAPIView(APIView):
    def get(self, request):
        try:
            # Extract filter parameters from the query string
            filters = {
                key: value for key, value in request.query_params.items()
                if key in ['weight', 'length', 'sku_color', 'warehouse_number']
            }

            # Convert numeric fields to integers or floats where necessary
            if 'weight' in filters:
                filters['weight'] = float(filters['weight'])  # Updated for FloatField
            if 'length' in filters:
                filters['length'] = int(filters['length'])
            if 'warehouse_number' in filters:
                filters['warehouse_number'] = int(filters['warehouse_number'])

            # Get filtered alerts
            alerts = check_sku_alerts(filters)

            return Response(alerts)
        
        except ValueError as e:  # Handle invalid numeric conversions
            return Response({"error": f"Invalid filter value: {str(e)}"}, status=400)
