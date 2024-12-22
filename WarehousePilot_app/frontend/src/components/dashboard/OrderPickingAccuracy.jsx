import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

// Placeholder data for now
const data = [
  { name: "Accurate Picks", value: 98 },
  { name: "Inaccurate Picks", value: 2 },
];

// this dummy data will be replaced with data from the "inventory_inventorypicklistitem" table.
// Table: "inventory_inventorypicklistitem"
// Columns: Use "status" (true for accurate picks, false for inaccurate picks).
// Backend logic: Query the "inventory_inventorypicklistitem" table to calculate the count of accurate picks (status = true) 
// and the total number of picks. Subtract accurate picks from total picks to get inaccurate picks.

const COLORS = ["#00C49F", "#FF8042"];

const OrderPickingAccuracy = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      {/* Title */}
      <h2 className="text-lg font-semibold mb-4">Order Picking Accuracy</h2>

      {/* Chart */}
      <PieChart width={300} height={200}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>

      {/* Current data and target */}
      <p className="text-center mt-2 text-gray-600">
        Current: <span className="text-green-600">98%</span>, Target: 99%
      </p>
    </div>
  );
};

export default OrderPickingAccuracy;
