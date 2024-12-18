import React, { useState } from "react";

const WarehouseThroughput = ({ data }) => {
  const [timeframe, setTimeframe] = useState("day");
  const [department, setDepartment] = useState("All");

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Warehouse Throughput</h2>
      <div className="flex gap-4 mb-4">
        <select className="border p-2 rounded" onChange={(e) => setTimeframe(e.target.value)}>
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
        </select>
        <select className="border p-2 rounded" onChange={(e) => setDepartment(e.target.value)}>
          <option value="All">All Departments</option>
          <option value="Dept1">Department 1</option>
          <option value="Dept2">Department 2</option>
        </select>
      </div>
      <p className="text-2xl font-bold">{data[timeframe][department]} parts</p>
    </div>
  );
};

export default WarehouseThroughput;
