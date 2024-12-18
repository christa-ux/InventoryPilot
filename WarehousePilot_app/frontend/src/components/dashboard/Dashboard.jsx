import React, { useState } from "react";
import Header from "../dashboard_sidebar/Header";
import Sidebar from "../dashboard_sidebar/Sidebar";
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {

    const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 sm:ml-64">
        {/* Navbar */}
        <Header toggleSidebar={toggleSidebar} />

        {/* Page Content */}
        <main className="p-4 mt-16 bg-gray-100 min-h-screen">
          <h1 className="text-2xl font-semibold">Welcome to the Dashboard</h1>
          <p className="mt-4 text-gray-700">
            This is where your main content will go.This is the default dashboard. Do you have a role?</p>
            <button type='button' onClick={handleLogout}>Log Out</button>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;




