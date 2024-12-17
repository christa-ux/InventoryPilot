// route: /account_management
// This is the account management page for the manager. It displays the user's account information.

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dashboard from './Dashboard';


function AccountManagement() {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
  
  
    useEffect(() => {
      const fetchUserData = async () => {
        const token = localStorage.getItem('token');
        if (token) {
          try {
            const response = await axios.get('http://127.0.0.1:8000/manager_dashboard/profile/', {
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
      <>
      <Dashboard />
      <div>
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
        <button type='button' onClick={() => navigate('/password_modification')}>Change Password</button>
        <button type='button' onClick={() => navigate('/manager_dashboard')}>Dashboard</button>
        <button type='button' onClick={handleLogout}>Log Out</button>

      </div></>
  );
}

export default AccountManagement;