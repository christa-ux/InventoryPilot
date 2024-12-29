import React from "react";

const KpiCard = ({ title, value, target, unit }) => {
  const isTargetMet = value >= target;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className={`text-3xl font-bold ${isTargetMet ? "text-green-500" : "text-red-500"}`}>
        {value} {unit}
      </p>
      <p className="text-gray-500">Target: {target} {unit}</p>
    </div>
  );
};

export default KpiCard;
