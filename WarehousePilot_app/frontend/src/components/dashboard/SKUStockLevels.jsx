import React, { useState } from "react";
import Sidebar from "../dashboard_sidebar/Sidebar";
import Header from "../dashboard_sidebar/Header";

const SKUStockLevels = ({ userData }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const data = [
    { sku: "SKU001", product: "Product A", category: "Category 1", location: "Warehouse 1", stock: 5 },
    { sku: "SKU002", product: "Product B", category: "Category 2", location: "Warehouse 2", stock: 20 },
    { sku: "SKU003", product: "Product C", category: "Category 1", location: "Warehouse 3", stock: 8 },
    { sku: "SKU004", product: "Product D", category: "Category 3", location: "Warehouse 2", stock: 50 },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar userData={userData} isOpen={isSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 sm:ml-64">
        {/* Header */}
        <Header userData={userData} toggleSidebar={toggleSidebar} />

        {/* Content */}
        <main className="p-6 bg-gray-100 min-h-screen mt-10">
          <h2 className="text-3xl font-bold text-center mb-6">Stock Levels Dashboard</h2>
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-700 bg-white">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                <tr>
                  <th className="px-6 py-3">SKU</th>
                  <th className="px-6 py-3">Product</th>
                  <th className="px-6 py-3">Category</th>
                  <th className="px-6 py-3">Location</th>
                  <th className="px-6 py-3">Stock Level</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className={`${
                      item.stock < 10 ? "bg-red-100" : "bg-green-100"
                    } border-b hover:bg-gray-100`}
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">{item.sku}</td>
                    <td className="px-6 py-4">{item.product}</td>
                    <td className="px-6 py-4">{item.category}</td>
                    <td className="px-6 py-4">{item.location}</td>
                    <td className="px-6 py-4 font-bold">{item.stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SKUStockLevels;

