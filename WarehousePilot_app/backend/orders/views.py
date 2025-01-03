from django.http import JsonResponse
from .models import Orders
from django.db import connection
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

class OrdersView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            # Query to fetch inventory data with inventory_id
            with connection.cursor() as cursor:
                cursor.execute("""
                    SELECT order_id, estimated_duration, status, due_date
                    FROM orders_orders
                """)
                result = cursor.fetchall()

            # Process the result and return as JSON
            inventory_data = [{
                "order_id": row[0],  
                "estimated_duration": row[1],
                "status": row[2],
                "due_date": row[3],
            } for row in result]
            
            return Response(inventory_data)
        except Exception as e:
            return Response({"error": str(e)}, status=500)
