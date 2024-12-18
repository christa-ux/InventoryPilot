import React from "react";

const StockLevels = ({ stockData }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Stock Levels</h2>
      <ul>
        {stockData.map((item) => (
          <li key={item.sku} className={`p-2 ${item.qty < 10 ? "text-red-500" : "text-gray-700"}`}>
            {item.sku}: {item.qty} units
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockLevels;
