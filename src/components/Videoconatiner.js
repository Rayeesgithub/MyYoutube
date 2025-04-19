import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utlis/constants.js';
import VideoCard from './VideoCard.js';
import { useSelector } from 'react-redux';
import ShimmerCard from '../ShimmerUI/ShimmerCard.js';
import { Link } from 'react-router-dom';
const Videoconatiner = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  const [videoList,setVideo]=useState([]);
  useEffect(() => {
    getVideo();
  }, []);
 
   // Example dummy manual video objects (same shape as API data)
   const manualVideo1 = {
    id: "manual1",
    snippet: {
      title: "Rong Oi Rongali - Achurjya Borpatra...",
      channelTitle: "Achurjya Borpatra Official",
      thumbnails: {
        medium: {
         url: '',
        },
      },
    },
  };

  const getVideo = async () => {
    console.log("Fetching videos...");
    try {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      console.log(json.items);
      setVideo(json.items)
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  return videoList?.length===0 ? <ShimmerCard /> : (
    <div className=' flex flex-wrap   '>
     {videoList.map((video) => (
      <Link to={"/watch?v="+video.id}>  
      <VideoCard key={video.id} info={video} isMenuOpen={isMenuOpen}/>
      </Link>
      
      ))}
      <VideoCard key="manual1" info={manualVideo1} />
     
    </div>
  )
}

export default Videoconatiner
