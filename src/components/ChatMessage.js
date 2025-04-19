import React from 'react'

import { FaUserCircle } from "react-icons/fa";
const ChatMessage = ({ name, message }) => {
  console.log("ChatMessage Props:", { name, message }); // 👈 debug line

  return (
    <div className="flex items-start gap-3 px-4 py-2 hover:bg-gray-100 rounded-md">
      {/* User icon */}
      <FaUserCircle className="text-3xl text-gray-600 mt-1" />

      {/* Message box */}
      <div className="flex flex-col ">
        <p className="  dark:bg-black text-black dark:text-white text-sm font-semibold ">@{name || "No Name"}</p>
        <p className=" dark:bg-black text-black dark:text-white text-sm  break-words max-w-[90vw] md:max-w-[280px] lg:max-w-[500px]">
          {message || "No Message"}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
