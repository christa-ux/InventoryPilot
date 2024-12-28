from django.db import connection
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

class InventoryView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            # Query to fetch inventory data with inventory_id
            with connection.cursor() as cursor:
                cursor.execute("""
                    SELECT inventory_id, sku_color_id, qty, warehouse_number
                    FROM inventory_inventory
                """)
                result = cursor.fetchall()

            # Process the result and return as JSON
            inventory_data = [{
                "inventory_id": row[0],  # Include inventory_id in the result
                "sku_color_id": row[1],
                "qty": row[2],
                "warehouse_number": row[3],
            } for row in result]
            
            return Response(inventory_data)
        except Exception as e:
            return Response({"error": str(e)}, status=500)
