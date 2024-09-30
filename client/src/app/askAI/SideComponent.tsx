"use client";

import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

interface SidebarComponentProps {
  setSelectedMenuItem: (item: string) => void;
}

export default function SidebarComponent({ setSelectedMenuItem }: SidebarComponentProps) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='shadow-md h-screen'>
      {isOpen && (
        <Sidebar className="">
          <div className='flex justify-between px-2'>
            <h1>Activity</h1>
            <button onClick={toggleSidebar} className="close-button">
              ✖
            </button>
          </div>
          <Menu>
            <MenuItem onClick={() => setSelectedMenuItem('Dashboard')}> Dashboard </MenuItem>
            <MenuItem onClick={() => setSelectedMenuItem('Profile')}> Profile </MenuItem>
            <MenuItem onClick={() => setSelectedMenuItem('History')}> History </MenuItem>
            <SubMenu label="Charts">
              <MenuItem onClick={() => setSelectedMenuItem('Pie charts')}> Pie charts </MenuItem>
              <MenuItem onClick={() => setSelectedMenuItem('Line charts')}> Line charts </MenuItem>
            </SubMenu>
            <MenuItem onClick={() => setSelectedMenuItem('Documentation')}> Documentation </MenuItem>
            <MenuItem onClick={() => setSelectedMenuItem('Calendar')}> Calendar </MenuItem>
          </Menu>
        </Sidebar>
      )}
      {!isOpen && (
        <button onClick={toggleSidebar} className="open-button">
          ☰
        </button>
      )}
    </div>
  );
}