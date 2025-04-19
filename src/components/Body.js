import React from 'react';
import Sidebar from './Sidebar.js';

import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const Body = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  const closeMenu=useSelector((state)=>state.app.closeMenu)
  return (
    
    <div className="flex h-[calc(100vh-56px)] overflow-hidden  dark:bg-black text-black dark:text-white">
      {/* Sidebar - only shows when open */}
      {isMenuOpen && (
        <div className="w-56 fixed   top-[56px] h-[calc(100vh-56px)] mt-1 bg-white overflow-y-auto ">
          <Sidebar />
          
        </div>
      )}

      {/* Main Container */}
      <div className={`transition-all duration-300 ml-0 ${
          isMenuOpen ? 'lg:ml-56 sm:ml-64' : ' lg:ml-4 ml-0 '
        }  flex-1 overflow-y-auto`}
      >
       <Outlet/>
      </div>
    </div>
  );
};

export default Body;
