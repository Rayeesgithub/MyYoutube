import React from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdOutlineWatchLater, MdOutlineLiveTv, MdSportsSoccer } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { CgPlayListAdd } from "react-icons/cg";
import { SlLike } from "react-icons/sl";
import { FaUser, FaUserGraduate, FaRegUser } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import { RiShoppingBag4Line } from "react-icons/ri";
import { BiMoviePlay } from "react-icons/bi";
import { LuMusic4 } from "react-icons/lu";
import { IoGameControllerOutline } from "react-icons/io5";
import { TiNews } from "react-icons/ti";
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const isToggleMenu = useSelector((state) => state.app.isMenuOpen);

  if (!isToggleMenu) return null;

  const menuItemStyle = "flex font-medium  items-center  gap-3 text-sm hover:bg-gray-200 rounded-lg px-3 py-2 cursor-pointer ";

  return (
    <div className="p-4 shadow-md w-56  dark:bg-black text-black dark:text-white  sm:text-gray-800  sm:bg-white  bg-gray-600 text-sm overflow-y-auto h-[calc(100vh-56px)] 
       absolute sm:relative">

      <ul className="space-y-2">
      <Link to={"/"}>
         <li className={menuItemStyle}><AiOutlineHome className="text-xl" /><span className=' font-bold'>Home</span> </li>
      </Link> 
        <li className={menuItemStyle}><SiYoutubeshorts className="text-xl" />Shorts</li>
        <li className={menuItemStyle}><MdOutlineSubscriptions className="text-xl" />Subscription</li>
      </ul>

      <ul className="border-t border-gray-300 mt-4 pt-3 space-y-2">
        <li className={menuItemStyle}><GoHistory className="text-xl" />History</li>
        <li className={menuItemStyle}><CgPlayListAdd className="text-xl" />Playlist</li>
        <li className={menuItemStyle}><MdOutlineWatchLater className="text-xl" />Watch Later</li>
        <li className={menuItemStyle}><SlLike className="text-xl" />Liked Videos</li>
      </ul>

      <ul className="border-t border-gray-300 mt-4 pt-3 space-y-2">
        <h2 className="font-semibold text-base mb-1">Subscription</h2>
        <li className={menuItemStyle}><FaUser className="text-xl" />Dhuruv Rathee</li>
        <li className={menuItemStyle}><FaUserGraduate className="text-xl" />Insia Today</li>
        <li className={menuItemStyle}><FaRegUser className="text-xl" />Coder Army</li>
        <li className={menuItemStyle}><img className="h-6 w-6 rounded-full" src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png" alt="logo" />Piyush Garg</li>
        <li className={menuItemStyle}><img className="h-6 w-6 rounded-full" src="https://icons.veryicon.com/png/o/internet--web/web-interface-flat/6606-male-user.png" alt="logo" />Ashish Kumar</li>
        <li className={menuItemStyle}><img className="h-6 w-6 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Aaj_tak_logo.png/640px-Aaj_tak_logo.png" alt="logo" />Aaaj Tak</li>
        <li className={menuItemStyle}><img className="h-6 w-6 rounded-full" src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" alt="logo" />Sport News</li>
      </ul>

      <ul className="border-t border-gray-300 mt-4 pt-3 space-y-2">
        <h2 className="font-semibold text-base mb-1">Explore</h2>
        <li className={menuItemStyle}><IoIosTrendingUp className="text-xl" />Trending</li>
        <li className={menuItemStyle}><RiShoppingBag4Line className="text-xl" />Shopping</li>
        <li className={menuItemStyle}><BiMoviePlay className="text-xl" />Movies</li>
        <li className={menuItemStyle}><LuMusic4 className="text-xl" />Music</li>
        <li className={menuItemStyle}><MdOutlineLiveTv className="text-xl" />Live</li>
        <li className={menuItemStyle}><IoGameControllerOutline className="text-xl" />Gaming</li>
        <li className={menuItemStyle}><TiNews className="text-xl" />News</li>
        <li className={menuItemStyle}><MdSportsSoccer className="text-xl" />Sports</li>
        <li className={menuItemStyle}><FaUserGraduate className="text-xl" />Course</li>
      </ul>
    </div>
  );
};

export default Sidebar;
