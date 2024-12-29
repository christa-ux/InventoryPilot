// route: /account_management
// This is the account management page for the manager. It displays the user's account information.

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from "../dashboard_sidebar/Sidebar";
import Header from "../dashboard_sidebar/Header";


function AccountManagement() {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  
    useEffect(() => {
      const fetchUserData = async () => {
        const token = localStorage.getItem('token');
        if (token) {
          try {
            const response = await axios.get('http://127.0.0.1:8000/auth/profile/', {     // this is the url to get the user data, not just managers. We can change later as required. 
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
  
    const handleLogout = () => {
      localStorage.removeItem('token');
      navigate('/');
    };
  

    return (
      <div className="flex">
        {/* Sidebar */}
        <Sidebar userData={userData} isOpen={isSidebarOpen} />

        {/* Main Content */}
        <div className="flex-1 sm:ml-64">
          {/* Navbar */}
          <Header userData={userData} toggleSidebar={toggleSidebar} />
          {/* Page Content */}
          <main className="p-4 mt-16 bg-gray-100 ">
        <h1>Account Management Page</h1>
        <p>This is the overview page.</p>
        {userData ? (
          <div>
            <p>Username: {userData.username}</p>
            <p>Email: {userData.email}</p>
            <p>Role: {userData.role}</p>
            <p>First Name: {userData.first_name}</p>
            <p>Last Name: {userData.last_name}</p>
            <p>Department: {userData.department}</p>
          </div>
        ) : (
          <p>Error</p>
        )}
        <button type='button' 
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700"   // temporary style ? 
        onClick={() => navigate('/change_password')}>Change Password</button>
        </main>
      </div>
    </div>
  );
}

export default AccountManagement;