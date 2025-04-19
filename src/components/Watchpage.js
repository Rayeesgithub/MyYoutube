import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utlis/appSlice.js";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "../utlis/constants.js";
import { YOUTUBE_VIDEO_BYID } from "../utlis/constants.js";
import ShimmerWatch from "../ShimmerUI/ShimmerWatch.js";
import { RiShareForwardLine } from "react-icons/ri";
import { MdOutlineThumbUpAlt } from "react-icons/md";
import { FiThumbsDown } from "react-icons/fi";
import { GoDownload } from "react-icons/go";
import CommentContainer from "./CommentContainer.js";
import Livechat from "./Livechat.js";
const Watchpage=()=>{
    const dispatch = useDispatch();
    const [searchParam] = useSearchParams();
    const videoDetails=YOUTUBE_VIDEO_BYID + searchParam.get("v");
    const [videoInfo, setVideoInfo] = useState([]);
    
    const [isExpanded, setIsExpanded] = useState(false);
    
    const toggleExpand=()=> setIsExpanded(!isExpanded);
    useEffect(()=>{
      getVideoInfo();
      },[])
      console.log("Watch Page");
    const getVideoInfo=async()=>{
      try {
        const data = await fetch(YOUTUBE_VIDEO_BYID + videoDetails);
        const json = await data.json();
        setVideoInfo(json?.items || []);
      } catch (err) {
        console.error("Failed to fetch video info:", err);
        setVideoInfo([]); // fallback to empty array to prevent crash
      }
    }
    
    const [suggestionVideo, setSuggestionVideo] = useState([]);

  useEffect(() => {
    const getSubscriber = async () => {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      // console.log(json.items);
      setSuggestionVideo(json.items);
    };
    getSubscriber();
  }, []);


    useEffect(()=>{
     dispatch(closeMenu());
    },[])
  
   return videoInfo?.length === 0 ? (
    <ShimmerWatch />
  ) : (
    <div className=" md:m-2   lg:ml-5 mr-5 flex flex-wrap  dark:bg-black text-black dark:text-white ">
      <div className=" flex m-5  ">
      <div>
   <div className=" ">
      <iframe
            className="xs2:overflow-y-hidden  rounded-2xl  xl:w-[1000px]  lg:w-[640px] 
            sm:w-[480px] xs1:w-[319px] xs2:w-[370px] xs3:w[424px] md:h-[30rem] h-60 md:ml-1 grid place-items-center overflow-x-auto"
          
            src={"https://www.youtube.com/embed/" + searchParam.get("v")}
            title="YouTube video player"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
   </div>
 {videoInfo.map((video) => {
            return (
              <>
                {/* Subscriber Section */}
                <div key={video.id} className="xl:w-[1000px]  lg:w-[640px] 
                 sm:w-[480px]  xs1:w-[320px] xs2:w-[370px] xs3:w[424px]   ">
                 <h1 className=" font-bold md:text-xl sm:text-[0.8rem] text-[0.6rem] mt-2">{video.snippet.title}</h1>
                </div>

                <div className=" flex  xl:w-[1000px] lg:w-3/4  
                 sm:w-[480px]  xs1:w-[320px] xs2:w-[370px] xs3:w[424px] ">
                  <div className=" flex m-2 ">
                     <img className=" sm:w-10 sm:h-10  w-5 h-5 rounded-full border border-gray-400 mt-1"
                      src="https://i.pinimg.com/736x/26/61/9c/26619c16b5451afaa95956dff93ae3e5.jpg" alt="logo"
                     />
                     <ul className=" ml-2 ">
                      <li className=" font-semibold xl:text-xl md:text-[1rem] text-[0.6rem] xs1:text-[0.4rem] flex">{video.snippet.channelTitle}</li>
                      <li className=" md:text-sm flex xs2:text-[0.4rem] xs1:text-[5px]">312K Subscriber</li>
                     </ul>
                     <p className="flex ml-5 ">
                     <button className=" font-semibold  cursor-pointer bg-black text-white py-[2px] sm:py-1 xl:px-5 sm:px-3  xl:py-2 px-4 lg:rounded-3xl 
                     rounded-lg lg:text-sm xs2:text-[0.5rem] xs1:text-[7px] xs1:px-2">
                      Subscribe
                     </button>
                    <div className="xs1:hidden xl:block">
                    <button className="  border flex dark:text-black  border-gray-200 shadow-sm px-5 xl:py-2 bg-gray-200 rounded-full m-2 xl:text-xl hover:bg-gray-300 ml-32">
                     <MdOutlineThumbUpAlt className=" mx-3 mt-1 xl:text-xl" /> {" "}
                        {video?.statistics?.likeCount} |{" "}
                        <FiThumbsDown  className="mx-3 mt-1 xl:text-xl"/>
                     </button>
                    </div>
                   
                  <button className="flex dark:text-black  justify-center xl:text-xl  items-center gap-x-2 space-x-2 bg-gray-300 black py-1 xl:py-2 px-4 border ml-2 border-gray-50 rounded-2xl  lg:text-xl text-[0.5rem]">
                  <RiShareForwardLine  />  Share
                  </button>

                  <button className=" flex dark:text-black  justify-center xl:text-xl items-center gap-x-2 space-x-2  bg-gray-300 black py-1 xl:py-2 px-4 border ml-2 border-gray-50 rounded-2xl  lg:text-xl text-[0.5rem]">
                  <GoDownload /> Download
                  </button>
                     </p>
                  </div>
                </div>
                 
                 {/* Video Details Section */}
                 
              <div className=" xl:w-full  lg:w-[1022px] md:w-[768px] sm:w-[640px] xs1:w-[320px] xs2:w-[370px] xs3:w[424px]">
              <div className=" shadow-sm mt-2 bg-gray-100 rounded-lg  dark:bg-black text-black dark:text-white ">
                   <p className=" font-semibold md:text-sm text-[0.8rem]">
                   {video?.statistics?.viewCount}  <span className="mx-1">views</span>
                  <span className=" ml-2">{video.snippet.publishedAt}  <span>publish</span></span> 
                   </p>
 
                  <p className=" md:text-sm text-[10px] xl:w-full  lg:w-[1022px] md:w-[768px] sm:w-[640px] xs1:w-[320px] xs2:w-[370px] xs3:w[424px] mt-1 ">
                  {video.snippet.title}</p>
                  <div className="md:text-sm text-[10px] flex  flex-wrap mt-2 xl:w-full  lg:w-[1022px] md:w-[768px] sm:w-[640px] xs1:w-[320px] xs2:w-[370px] xs3:w[424px] ">
                
                  {isExpanded  ? video.snippet?.description : (video.snippet?.description?.slice(0, 100) || '') + "..."}
               
                  </div>
                  <div className=" w-[350px] flex flex-wrap mt-2">
                  {isExpanded ? video.snippet?.tags?.join(", ")
  : (video.snippet?.tags?.slice(0, 1).join(", ") || '') + "..."}
               <span
           onClick={toggleExpand}
           className="text-blue-600 ml-2 cursor-pointer text-sm font-medium hover:underline"
           >
             {isExpanded ? "Show less" : "Show more"}
             </span>
                  </div>
                 </div>
               
              </div>
                   {/* Comment Section */}
                   <div className=" mt-3 bg-white  dark:bg-black text-black dark:text-white">
                    <h1 className=" m-2 font-bold md:text-xl text-[0.8rem]">{video?.statistics?.commentCount} Comments</h1>
                   </div>
                  <CommentContainer/>
   </>
            )
 })}
    </div>

  {/* Suggestion video right sidebar section  and live chat */}
    <div>
      <div className=" xl:ml-2 md:ml-[-18rem] lg:ml-[-21rem]  hidden md:block ">
        <Livechat/>
      </div>
    </div>

    </div>
    </div>
   ) 
  
}

export default Watchpage;