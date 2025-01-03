import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../dashboard_sidebar/Sidebar";
import Header from "../dashboard_sidebar/Header";
import UsersTable from "./UsersTable";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function ManageUsersPage() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [userData, setUserData] = useState(null);
    const [staffAmount, setStaffAmount] = useState(0);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    // Retrieve the current user's data
    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const response = await axios.get('http://127.0.0.1:8000/auth/profile/', {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    setUserData(response.data);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        };
        fetchUserData();
    }, []);


    // Check that the user is an admin
    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            const parsedUser = JSON.parse(user);
            if (parsedUser.role != "admin") {
                // Navigate to correct dashboard
                if (parsedUser.role == "manager") {
                    navigate("/manager_dashboard");
                } else {
                    navigate("/dashboard");
                }
            }
        } else {
            alert("Not logged in");
            navigate("/");
        }
    }, [navigate]);

    return (
        <div className="flex h-full">
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
                            <Button variant="contained" color="success" href="/admin_dashboard/add_users">
                                Add new staff
                            </Button>
                            <h2 className="text-lg font-bold">Total number of staff: {staffAmount}</h2>
                        </Box>
                        <UsersTable onStaffCountChange={setStaffAmount} />
                    </div>
                </main>
            </div>
        </div>
    );
};