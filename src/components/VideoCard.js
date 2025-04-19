import React from 'react'
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import { kFormatter } from "../utlis/constants.js";
import { PiDotBold } from "react-icons/pi";
dayjs.extend(relativeTime);
const VideoCard = ({info,isMenuOpen}) => {
    const cardWidth = isMenuOpen ? 'w-72' : 'w-80 lg:w-[30rem] ';
    const thumbnailUrl = isMenuOpen
  ? info?.snippet?.thumbnails?.medium?.url
  : info?.snippet?.thumbnails?.high?.url;
     const {publishedAt}=info?.snippet;
    const Title=info?.snippet?.title;
    const shortDescription = Title.length > 40 ?Title.slice(0, 45) + "..." 
       : Title;

       
       const fontText=isMenuOpen ? 'text-base' : 'text-xl';
  return (
    <div className={`p-3  sm:m-2 shadow-sm m-auto  dark:bg-black text-black dark:text-white bg-white rounded-xl  hover:shadow-lg transition-shadow duration-300 md:${cardWidth}`}>
     <img className=' rounded-lg object-cover hover:opacity-90 transition-opacity duration-300 cursor-pointer'
      src={thumbnailUrl} alt='logo '/>
     
      <ul>
      
        <li className={`flex flex-wrap font-semibold md:text-[16px] text-sm `  }>{shortDescription}</li>
        
        <div className=' flex items-center space-x-2 '>
            <li className={`font-semibold md:text-[16px] text-sm `}>{info?.snippet?.channelTitle}</li>
            <img className='h-5 w-5 mt-1 ' src='https://i.abcnewsfe.com/a/fdaac49c-1de9-4903-976f-15234bdf3b24/230401_gma_ejiochi_hpMain_4x3.jpg' 
        alt='logo'/>
        </div>
       <div className=' flex items-center space-x-4 '>
       <li className={`md:text-[16px] text-sm`}>{info?.statistics?.viewCount}<span className={`ml-1 md:text-xl text-sm `}>views</span></li>
       <PiDotBold className=' font-semibold'/>
        <p>{dayjs(publishedAt).fromNow()}</p>
       </div>
      </ul>
    </div>
  )
}

export default VideoCard
