import React from 'react'
import VideoCard from "./VideoCard"
import {useEffect} from "react";

const VideoContainer = () => {

  const getVideos=async()=>{
    const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyCfTD2_KPR5FhqBrCxSHz0fMTk1AVXTuwo");
    const json = await data.json();
    console.log(json);
  }

  useEffect(()=>{
    getVideos();
  },[]);

  return (
    <div>
    <h2>Videos</h2>
    {/* {Video.map((video)=>(
      <VideoCard />
    ))} */}
     
    </div>
  )
}

export default VideoContainer
