import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FcBusinessman } from "react-icons/fc";
import { BiSolidSend } from "react-icons/bi";
import ChatMessage from "./ChatMessage.js";
import { addMessages } from "../utlis/chatSlice.js";
import {
  generateRandomCompliment,
  generateRandomName,
  generateRandomMessage,
} from "../utlis/helper.js";

const Livechat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [userMessage, setUserMessage] = useState("");

  useEffect(() => {
    const intervalid = setInterval(() => {
      const newMessage = {
        id: generateRandomMessage(25),
        name: generateRandomName(),
        message: generateRandomCompliment(), // ✅ fixed here
      };
      dispatch(addMessages(newMessage));
    }, 2000);
  
    return () => clearInterval(intervalid);
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userMessage.trim()) return;

    const newMessage = {
      id: generateRandomMessage(5),
      name: "Rayees Alam",
      message: userMessage, // ✅ correct already
    };
    dispatch(addMessages(newMessage));
    setUserMessage("");
  };

  return (                                
    <div className=" ml-2 px-2  ">
     <h1 className="font-semibold  text-slate-700 text-lg  border-b border-gray-300 pb-1 mb-2">Live Chat</h1>
      <div className="box-border overflow-y-scroll  dark:bg-black text-black dark:text-white flex flex-col-reverse xl:h-[500px] xl:w-[390px] md:h-[390px] lg:h-[430px] lg:w-[330px] bg-slate-100  ">
        {chatMessages.map((msg, i) => (
          <ChatMessage key={i} name={msg.name} message={msg.message} />
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white flex p-2 gap-2 rounded-xl items-center  dark:bg-black text-black dark:text-white">
          <FcBusinessman className="mh-8 text-3xl rounded-lg border border-red-900 ml-4" />
          <input
            className="ml-4 mr-3 p-1 w-full rounded-lg shadow-sm border-b-4 border-indigo-300 focus:outline-0"
            placeholder="Say something..."
            value={userMessage}
            name="userMessage"
            onChange={(e) => setUserMessage(e.target.value)}
          />
          <button type="submit" className="p-2 rounded-lg  dark:bg-black text-black dark:text-white  shadow-sm border border-b-3 focus:outline-0">
            <BiSolidSend className="w-10 cursor-pointer" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Livechat;
