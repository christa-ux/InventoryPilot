import React from "react";
import KpiCard from "./KpiCard";
import WarehouseThroughput from "./WarehouseThroughput";
import StockLevels from "./StockLevels";
import OrderFulfillmentRate from "./OrderFulfillmentRate";

const KpiDashboard = () => {
  const kpiData = {
    cycleTime: 18,
    orderPickingAccuracy: 98,
    warehouseThroughput: {
      day: { All: 300, Dept1: 120, Dept2: 180 },
      week: { All: 1500, Dept1: 800, Dept2: 700 },
      month: { All: 6000, Dept1: 3200, Dept2: 2800 },
    },
    stockLevels: [
      { sku: "SKU123", qty: 5 },
      { sku: "SKU456", qty: 20 },
      { sku: "SKU789", qty: 8 },
    ],
    fulfillmentRate: { "24h": 92, "48h": 97, "72h": 99 },
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">KPI Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <KpiCard title="Cycle Time Per Order" value={kpiData.cycleTime} target={24} unit="hrs" />
        <KpiCard
          title="Order Picking Accuracy"
          value={kpiData.orderPickingAccuracy}
          target={99}
          unit="%"
        />
        <WarehouseThroughput data={kpiData.warehouseThroughput} />
        <StockLevels stockData={kpiData.stockLevels} />
        <OrderFulfillmentRate data={kpiData.fulfillmentRate} />
      </div>
    </div>
  );
};

export default KpiDashboard;
