import React from "react";
import { useState } from "react";
import Sidebar from "../dashboard_sidebar/Sidebar";
import Header from "../dashboard_sidebar/Header";
import Staff from "./Staff";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const StaffDashboard = ({ userData }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar userData={userData} isOpen={isSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 sm:ml-64 ">
        {/* Header */}
        <Header userData={userData} toggleSidebar={toggleSidebar} />

        <main className="flex p-6 bg-gray-100 h-screen justify-center mt-11">
  {/* Cards Container */}
  <div className="flex flex-col m-auto w-full max-w-7xl">
    <Box
      className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white border border-gray-300 rounded-md mb-5"
      sx={{
        width: "100%",
        bgcolor: "rgb(255 255 255 / var(--tw-bg-opacity, 1))",
        fontSize: "0.875rem",
        fontWeight: "700",
      }}
    >
      <Button variant="contained" color="success" href="/add_staff">
        Add new staff
      </Button>
      <h2 className="text-lg font-bold">Total number of staff: 50</h2>
    </Box>
    <Staff />
  </div>
</main>

      </div>
    </div>
  );
};

export default StaffDashboard;
