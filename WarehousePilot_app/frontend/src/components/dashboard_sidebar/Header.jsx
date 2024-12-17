import React from "react";

const Header = ({ toggleSidebar }) => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-md">
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Sidebar Toggle Button: Only Visible on Mobile */}
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
          <span className="text-xl font-semibold dark:text-white">Dashboard</span>
        </a>

        {/* Sign Out Button: Always Visible */}
        <div className="flex items-center">
          <a
            href="#"
            className="flex items-center text-gray-900 hover:bg-gray-100 p-2 rounded-lg dark:text-white dark:hover:bg-gray-700"
          >
            <svg
              className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400"
              fill="none"
              viewBox="0 0 18 16"
              stroke="currentColor"
              strokeWidth="2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
              />
            </svg>
            <span className="whitespace-nowrap">Sign Out</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
