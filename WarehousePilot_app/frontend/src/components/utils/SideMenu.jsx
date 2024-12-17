import React from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";

export default function SideMenu() {
  return (
    <div className="h-full bg-gray-100 text-black pt-16 lg:pt-4">
      <h2 className="text-2xl font-bold mb-4 px-4">Menu</h2>
      <Listbox
        aria-label="Sidebar Navigation"
        variant="light"
        className="p-0"
      >
        <ListboxItem 
          key="dashboard"
          className="hover:bg-gray-200"
        >
          Dashboard
        </ListboxItem>
        <ListboxItem 
          key="settings"
          className="hover:bg-gray-200"
        >
          Settings
        </ListboxItem>
        <ListboxItem 
          key="profile"
          className="hover:bg-gray-200"
        >
          Profile
        </ListboxItem>
        <ListboxItem 
          key="help"
          className="hover:bg-gray-200"
        >
          Help
        </ListboxItem>
      </Listbox>
    </div>
  );
}