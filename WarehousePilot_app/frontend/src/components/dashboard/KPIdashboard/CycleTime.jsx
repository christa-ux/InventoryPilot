import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

// Placeholder data for now
const data = [
  { day: "Monday", estimatedDuration: 20 },
  { day: "Tuesday", estimatedDuration: 18 },
  { day: "Wednesday", estimatedDuration: 19 },
  { day: "Thursday", estimatedDuration: 16 },
  { day: "Friday", estimatedDuration: 15 },
];

// Comment: Replace this dummy data with data from the "orders_orders" table.
// Table: "orders_orders"
// Columns: Use "due_date" (group by weekday for x-axis) and "estimated_duration" for y-axis.
// Backend logic: Query the "orders_orders" table, group orders by the day of the week (based on "due_date"), and calculate the average "estimated_duration" for each day.

const CycleTime = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      {/* Title */}
      <h2 className="text-lg font-semibold mb-4">Cycle Time Per Order</h2>

      {/* Chart */}
      <LineChart width={300} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis label={{ value: "Hours", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="estimatedDuration" stroke="#8884d8" />
      </LineChart>

      {/* Current data and target */}
      <p className="text-center mt-2 text-gray-600">
        Current: <span className="text-red-600">18 hrs</span>, Target: 24 hrs
      </p>
    </div>
  );
};

export default CycleTime;
