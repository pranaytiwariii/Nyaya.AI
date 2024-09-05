"use client";

import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

export default function sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='shadow-md h-screen'>
      {isOpen && (
        <Sidebar classname="">
          <div className='flex justify-between px-2'>
          <h1> Activity </h1>
          <button onClick={toggleSidebar} className="close-button">
            ✖
          </button>
          </div>
          <Menu>
            <MenuItem> Dashboard </MenuItem>
            <MenuItem> Profile </MenuItem>
            <MenuItem> History </MenuItem>
            <SubMenu label="Charts">
              <MenuItem> Pie charts </MenuItem>
              <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <MenuItem> Documentation </MenuItem>
            <MenuItem> Calendar </MenuItem>
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

