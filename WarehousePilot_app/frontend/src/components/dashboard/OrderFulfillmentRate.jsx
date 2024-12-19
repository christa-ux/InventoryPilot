import React, { useState } from "react";

const OrderFulfillmentRate = ({ data }) => {
  const [timeframe, setTimeframe] = useState("24h");

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Order Fulfillment Rate</h2>
      <select className="border p-2 rounded mb-4" onChange={(e) => setTimeframe(e.target.value)}>
        <option value="24h">24 Hours</option>
        <option value="48h">48 Hours</option>
        <option value="72h">72 Hours</option>
      </select>
      <p className="text-2xl font-bold">{data[timeframe]}%</p>
    </div>
  );
};

export default OrderFulfillmentRate;
