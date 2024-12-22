import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

// Placeholder data for now
const data = [
  { time: "Day 1", parts: 300 },
  { time: "Day 2", parts: 350 },
  { time: "Day 3", parts: 280 },
  { time: "Day 4", parts: 400 },
  { time: "Day 5", parts: 320 },
];

// Backend 
// Table: "inventory_inventory"
// Columns:
// we will use "time_frame" to determine the time period (e.g., Day, Week, Month).
// we will use "throughput" to represent the total number of processed parts or items.
// Backend Logic:
//  Query the "inventory_inventory" table and group the data by "time_frame".
// Return the aggregated data in this format:
//   [
//     { time: "Day 1", parts: 300 },
//     { time: "Day 2", parts: 350 },
//     { time: "Day 3", parts: 280 },
//     { time: "Day 4", parts: 400 },
//     { time: "Day 5", parts: 320 },
//   ]

const WarehouseThroughput = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center">
      {/* Title */}
      <h2 className="text-lg font-semibold mb-4 text-center">Warehouse Throughput</h2>

      {/* Time Selector */}
      <div className="text-center mb-4">
        <select className="border rounded-md px-2 py-1 text-sm">
          <option value="Day">Day</option>
          <option value="Week">Week</option>
          <option value="Month">Month</option>
        </select>
      </div>

      {/* Area Chart */}
      <div className="w-full overflow-hidden">
        <AreaChart
          width={350} 
          height={250} 
          data={data}
          margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" label={{ value: "Time", position: "insideBottom", offset: -5 }} />
          <YAxis label={{ value: "Parts", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Area type="monotone" dataKey="parts" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </div>
    </div>
  );
};

export default WarehouseThroughput;
