from manager_dashboard.models import Alert
from inventory.models import Inventory
from django.db.models import F

def check_sku_alerts(filters=None):
    """
    Retrieves low-stock alerts with optional filtering and generates new alerts if necessary.
    
    :param filters: A dictionary of filter parameters (e.g., weight, length, warehouse_number, sku_color).
    :return: A list of low-stock alerts.
    """
    # Default behavior: Compare qty against amount_needed
    low_stock_items = Inventory.objects.filter(qty__lt=F('amount_needed'))

    # Apply filters dynamically if provided
    if filters:
        if 'threshold' in filters:
            # Override default behavior with a custom threshold
            low_stock_items = Inventory.objects.filter(qty__lt=filters['threshold'])
        if 'weight' in filters:
            low_stock_items = low_stock_items.filter(sku_color__weight=filters['weight'])
        if 'length' in filters:
            low_stock_items = low_stock_items.filter(sku_color__length=filters['length'])
        if 'sku_color' in filters:  # Updated to use sku_color as identifier
            low_stock_items = low_stock_items.filter(sku_color__sku_color=filters['sku_color'])
        if 'warehouse_number' in filters:
            low_stock_items = low_stock_items.filter(warehouse_number=filters['warehouse_number'])

    alerts = []
    for item in low_stock_items:
        # Generate an alert message
        alert_message = f"Low stock for {item.sku_color.sku_color} at {item.location}."

        # Check if an alert already exists for this inventory item
        existing_alert = Alert.objects.filter(inventory_item=item).exists()
        if not existing_alert:
            # Create a new alert
            Alert.objects.create(inventory_item=item, message=alert_message)

        # Add the alert to the response
        alerts.append({
            "sku_color": item.sku_color.sku_color,  # Use sku_color as the identifier
            "location": item.location,
            "current_qty": item.qty,
            "threshold": item.amount_needed,
            "warehouse_number": item.warehouse_number,
            "weight": item.sku_color.weight or 0,
            "length": item.sku_color.length or 0,
        })

    return alerts
