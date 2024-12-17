import React from "react";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Sidebar Toggle Button: Visible on Mobile */}
        <button
          onClick={toggleSidebar}
          className="text-gray-500 hover:bg-gray-100 rounded-lg p-2 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 sm:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
        </button>

        {/* Logo */}
        <a href="/" className="flex items-center">
          {/* <img
            src="logo.png"
            alt="Logo"
            className="h-8 mr-2"
          /> */}
          <span className="text-xl font-semibold dark:text-white">Dashboard </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;












// // the sidebar component for the manager dashboard
// // contains the links for manager pages. 
// // WIP, not yet implemented

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// // Import the CSS file

// function ManagerSidebar() {
//   const navigate = useNavigate();

//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   return (
//     <div className="sidebar">
//       <button onClick={() => handleNavigation('/manager_dashboard')} className="sidebar-button">
//         Overview
//       </button>
//       <button onClick={() => handleNavigation('/account_management')} className="sidebar-button">
//         Account Management
//       </button>
//     </div>
//   );
// }

// export default ManagerSidebar;