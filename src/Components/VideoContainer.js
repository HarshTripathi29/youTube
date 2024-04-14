import React, { useState } from 'react'
import VideoCard from "./VideoCard"
import {useEffect} from "react";
import { addVideos } from '../utils/videoSlice';
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux';

const VideoContainer = () => {

  const dispatch = useDispatch();
  const video = useSelector((store)=>store.video.video);

  // const [video, setVideo] = useState(" ");

  const getVideos=async()=>{
    const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&key=AIzaSyCfTD2_KPR5FhqBrCxSHz0fMTk1AVXTuwo");
    const json = await data.json();
    console.log(json);
    console.log(json.items[0].snippet.channelTitle)
    // setVideo(json.items);
    dispatch(addVideos(json.items));
  }

  useEffect(()=>{
    getVideos();
  },[]);

  return (video && (
    <div 
    className='videoContainer'>
    <h2>Videos</h2>
    {
      video.map((videos)=>(
      <VideoCard 
        title={videos.snippet.title} 
        thumbnail={videos.snippet.thumbnails.default.url}
        views={videos.statistics.viewCount}
       />
      ))
    }
     
    </div>
  )
)
}

export default VideoContainer
