import React from "react";

export default function Header() {
  return (
    <div className="bg-white shadow-md rounded p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Responsive Layout</h1>
      <div>
        {/* Add any header icons, buttons, or user profile components here */}
        <span className="text-gray-500">Welcome, User!</span>
      </div>
    </div>
  );
}
