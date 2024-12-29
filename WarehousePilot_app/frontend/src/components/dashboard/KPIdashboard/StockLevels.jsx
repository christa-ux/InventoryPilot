import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

// Placeholder data for now
const data = [
  { sku: "SKU123", quantity: 5 },
  { sku: "SKU456", quantity: 20 },
  { sku: "SKU789", quantity: 8 },
];

// this dummy data will be replaced with data from the "inventory_inventory" table.
// Table: "inventory_inventory"
// Columns: Use "sku_color_id" (for SKU) and "qty" (for stock quantity).
// Backend logic: Query the "inventory_inventory" table to fetch all SKU entries and their corresponding quantities.
// we will make sure the API returns the data in the following format:
// [
//   { sku: "SKU123", quantity: 5 },
//   { sku: "SKU456", quantity: 20 },
//   { sku: "SKU789", quantity: 8 },
// ]

const StockLevels = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center justify-center">
      {/* Title */}
      <h2 className="text-lg font-semibold mb-4 text-center">Stock Levels</h2>

      {/* Bar Chart */}
      <div className="w-full overflow-hidden">
        <BarChart
          width={300} 
          height={200}
          data={data}
          margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="sku" label={{ value: "SKU", position: "insideBottom", offset: -4 }} />
          <YAxis label={{ value: "Quantity", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="quantity" fill="#8884d8" />
        </BarChart>
      </div>

      {/* List of stock levels */}
      <ul className="mt-1 text-gray-600 text-center"> 
        {data.map((item) => (
          <li key={item.sku} className="text-sm">
            {item.sku}: <span className="text-red-600">{item.quantity} units</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockLevels;
