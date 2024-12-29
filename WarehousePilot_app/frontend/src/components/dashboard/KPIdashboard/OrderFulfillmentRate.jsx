import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

// Placeholder data for now
const data = [
  { time: "24 Hours", rate: 92 },
  { time: "48 Hours", rate: 97 },
  { time: "72 Hours", rate: 99 },
];

// Backend Integration Instructions:
// Table: "orders_orders"
// Columns:
// - Use "estimated_duration" to calculate the fulfillment rate for different time frames (e.g., 24, 48, 72 hours).
// - Use "status" to filter completed orders (e.g., "Completed" or equivalent status in the table).
// Backend Logic:
// - Query the "orders_orders" table to calculate the fulfillment rate for each time frame:
//   Fulfillment Rate = (Number of Completed Orders within Time Frame / Total Orders within Time Frame) * 100
// - Return the data in this format:
//   [
//     { time: "24 Hours", rate: 92 },
//     { time: "48 Hours", rate: 97 },
//     { time: "72 Hours", rate: 99 },
//   ]

const OrderFulfillmentRate = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center">
      {/* Title */}
      <h2 className="text-lg font-semibold mb-4 text-center">Order Fulfillment Rate</h2>

      {/* Bar Chart */}
      <div className="w-full overflow-hidden">
        <BarChart
          width={350} 
          height={250} 
          data={data}
          margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="time"
            label={{ value: "Time Frame", position: "insideBottom", offset: -5 }}
          />
          <YAxis
            label={{ value: "Fulfillment Rate (%)", angle: -90, position: "insideLeft" }}
            domain={[0, 100]} 
          />
           <br></br>
          <Tooltip />
          <Legend />
          <Bar dataKey="rate" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default OrderFulfillmentRate;
