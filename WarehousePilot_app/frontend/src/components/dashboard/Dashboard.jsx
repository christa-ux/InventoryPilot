import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };


  return (
    <div>
      <h2>Dashboard</h2>
      <p>This is the default dashboard. Do you have a role?</p>
      <button type='button' onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default Dashboard;