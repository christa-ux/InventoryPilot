// the sidebar component for the manager dashboard
// contains the links for manager pages. 
// WIP, not yet implemented

import React from 'react';
import { useNavigate } from 'react-router-dom';
// Import the CSS file

function ManagerSidebar() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="sidebar">
      <button onClick={() => handleNavigation('/manager_dashboard')} className="sidebar-button">
        Overview
      </button>
      <button onClick={() => handleNavigation('/account_management')} className="sidebar-button">
        Account Management
      </button>
    </div>
  );
}

export default ManagerSidebar;