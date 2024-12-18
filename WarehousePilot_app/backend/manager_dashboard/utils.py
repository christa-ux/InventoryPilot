from inventory.models import Inventory
from django.db.models import F
from manager_dashboard.models import Alert

def check_sku_alerts(filters=None):
    """
    Retrieves low-stock alerts with optional filtering and generates new alerts if necessary.
    
    :param filters: A dictionary of filter parameters (e.g., weight, length, warehouse_number).
    :return: A list of low-stock alerts.
    """
    low_stock_items = Inventory.objects.filter(qty__lt=F('amount_needed'))

    # Apply filters dynamically if provided
    if filters:
        if 'weight' in filters:
            low_stock_items = low_stock_items.filter(sku__weight=filters['weight'])
        if 'length' in filters:
            low_stock_items = low_stock_items.filter(sku__length=filters['length'])
        if 'sku' in filters:
            low_stock_items = low_stock_items.filter(sku__sku=filters['sku'])
        if 'warehouse_number' in filters:
            low_stock_items = low_stock_items.filter(warehouse_number=filters['warehouse_number'])
        if 'sku_color' in filters: 
            low_stock_items = low_stock_items.filter(sku__sku_color=filters['sku_color'])

    alerts = []
    for item in low_stock_items:
        # Generate an alert message
        alert_message = f"Low stock for {item.sku.sku} at {item.location}."

        # Check if an alert already exists for this inventory item
        existing_alert = Alert.objects.filter(inventory_item=item).exists()
        if not existing_alert:
            # Create a new alert
            Alert.objects.create(inventory_item=item, message=alert_message)

        # Add the alert to the response
        alerts.append({
            "sku": f"{item.sku.sku} {item.sku.sku_color or ''}".strip(),
            "location": item.location,
            "current_qty": item.qty,
            "threshold": item.amount_needed,
            "warehouse_number": item.warehouse_number,
            "weight": item.sku.weight or 0,
            "length": item.sku.length or 0,
        })

    return alerts
