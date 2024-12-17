"use client";

import React, { useState } from "react";
import Header from "./utils/Header";
import SideMenu from "./utils/SideMenu";
import { Button } from "@nextui-org/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Layout() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  return (
    <div className="flex h-screen">
      {/* Sidebar Toggle for Small Screens - ALWAYS VISIBLE */}
      <div className="fixed top-0 left-0 z-50 sm:hidden">
        <Button 
          isIconOnly 
          variant="light" 
          onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          className="m-2 bg-gray-100"
        >
          <Bars3Icon className="h-6 w-6" />
        </Button>
      </div>

      {/* Sidebar for All Screens */}
      <div 
        className={`
          ${isSidebarVisible ? 'w-1/6' : 'w-12'} 
          bg-gray-100 border-r border-gray-300 transition-all duration-300 relative
          block
        `}
      >
        <div className="absolute top-4 right-0 transform -translate-x-1/2 hidden sm:block">
          <Button 
            isIconOnly 
            variant="light" 
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
            className="z-50"
          >
            <Bars3Icon className="h-6 w-6" />
          </Button>
        </div>
        
        {/* Sidebar Content */}
        <div 
          className={`
            ${isSidebarVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            transition-opacity duration-300
          `}
        >
          <SideMenu />
        </div>
      </div>

      {/* Main Content Area */}
      <div 
        className={`
          flex-grow flex flex-col
          ${isSidebarVisible ? 'w-[calc(100%-16.666%)]' : 'w-[calc(100%-3rem)]'} 
          transition-all duration-300
        `}
      >
        <Header />
        <div className="flex-grow p-4">
          <h1 className="text-3xl font-bold">Main Content</h1>
          <p>Welcome to the responsive layout with TailwindCSS and NextUI.</p>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}