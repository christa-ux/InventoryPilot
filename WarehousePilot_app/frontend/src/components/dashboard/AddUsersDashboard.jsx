import React, { useState } from "react";
import Sidebar from "../dashboard_sidebar/Sidebar";
import Header from "../dashboard_sidebar/Header";
import UserForm from "./UseForm";


const AddUsersDashboard = ({ userData }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar userData={userData} isOpen={isSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 sm:ml-64">
        {/* Header */}
        <Header userData={userData} toggleSidebar={toggleSidebar} />

        {/* KPI Dashboard Content */}
        <main className="p-6 bg-gray-100 h-screen my-6">
         

          
           <UserForm />
         
        </main>
      </div>
    </div>
  );
};

export default AddUsersDashboard;

