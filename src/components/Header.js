import React, { useEffect, useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { togglemenu } from '../utlis/appSlice.js';
import { YOUTUBE_Search_API } from '../utlis/constants.js';
import { cacheResults } from '../utlis/searchSlice.js';
import { useNavigate } from "react-router-dom";
import DarkModeToggle from './DarkModeToggle.js';
const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sugesstion, setSugesstion] = useState([]);
  const [showSugesstion, setShowSugesstion] = useState(false);
  const searchCacheResults = useSelector((store) => store.search);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCacheResults[searchQuery]) {
        setSugesstion(searchCacheResults[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const response = await fetch(YOUTUBE_Search_API + searchQuery);
      const text = await response.text(); // because response is not JSON
      const data = JSON.parse(text); // convert string to array
      setSugesstion(data[1]);
      if (searchQuery) dispatch(cacheResults({ [searchQuery]: data[1] }));
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };
  

  const toggleMenuHandler = () => {
    dispatch(togglemenu());
  };

  return (
    <div className="flex items-center  dark:bg-black text-black dark:text-white  justify-evenly xl:justify-between 
    md:px-5 px-2  py-3 sm:py-4 md:py-5 shadow-md md:shadow-md sticky top-0 bg-white z-50">
      {/* Left: Menu + Logo */}
      <div className="flex items-center space-x-4">
        <img
          onClick={toggleMenuHandler}
          className="h-5 sm:h-6 md:h-7 cursor-pointer dark:bg-white"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/255px-Hamburger_icon.svg.png"
          alt="menu"
        />
       <div className=' hidden lg:block'>
       <span className=' flex font-bold gap-x-[2px] '>
        <img
          className="h-5 sm:h-5 md:h-7  w-6 sm:w-8 md:w-9 cursor-pointer "
          src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
          alt="youtube"
        /> MyYoutube
        </span>
       </div>
      </div>

      {/* Center: Search Bar */}
      <div className="flex flex-col relative  xl:w-xl xl:justify-between lg:-w-[25rem] sm:w-[20rem] w-[13rem] md:mx-4 mx-2 ">
        <div className="flex md:w-full  flex-grow ">
          <input
            className="xs1:w-[8rem] md:[14rem]   dark:bg-black text-black dark:text-white flex-grow px-4 py-2 border
             border-gray-400 rounded-l-full text-sm outline-none"
            placeholder="Search"
            type="text"
            value={searchQuery}
            onFocus={() => setShowSugesstion(true)}
            onBlur={() => setTimeout(() => setShowSugesstion(false), 150)}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="  dark:bg-black text-black dark:text-white border border-gray-400 px-4 py-2 rounded-r-full bg-gray-100">
            <ImSearch className="h-4 w-4" />
          </button>
        </div>

        {/* Suggestion Dropdown */}
        {showSugesstion && sugesstion.length > 0 && (
          <div className="absolute top-full mt-1 left-0 w-full bg-white text-gray-700 py-2 shadow-lg rounded-lg border border-gray-100 max-h-60 overflow-y-auto z-50">
            <ul>
              {sugesstion.map((suggest) => (
                <li
    key={suggest}
    className="flex items-center px-3 py-2 text-sm hover:bg-gray-200 cursor-pointer"
    onMouseDown={() => navigate("/results?search_query=" + encodeURIComponent(suggest))}
  >
    <ImSearch className="mr-2 text-gray-500" />
    {suggest}
  </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      
      <DarkModeToggle />
   
      {/* Right: Profile Icon */}
      <div className="flex items-center justify-end xs1:hidden xl:block">
        <img
          className="h-6 md:h-9 ml-2"
          src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Header;
