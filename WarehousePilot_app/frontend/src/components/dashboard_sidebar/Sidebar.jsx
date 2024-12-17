import React from "react";

const Sidebar = ({ isOpen }) => {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 sm:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform sm:block`}
    >

        <div>
            {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="../logo.jpg"
            alt="Logo"
            className="h-8 mr-2"
          />
         
        </a>

        </div>
      <div className="h-full px-3 pb-4 overflow-y-auto">

        
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 hover:bg-gray-100 rounded-lg dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 2a8 8 0 1 1-5.293 14.707A1 1 0 0 1 5 15V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 .293.707A8 8 0 0 1 10 2z" />
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 hover:bg-gray-100 rounded-lg dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 9V7a5 5 0 0 0-10 0v2a3 3 0 0 0-3 3v4h16v-4a3 3 0 0 0-3-3z" />
              </svg>
              Settings
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
