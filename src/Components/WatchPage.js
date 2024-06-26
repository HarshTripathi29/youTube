import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {

  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  console.log(searchParams.get("v"));

  useEffect(()=>{
    dispatch(closeMenu());
  },[]);

  return (
    <div>
    <iframe 
    width="800" 
    height="400" 
    src="https://www.youtube.com/embed/GOAQXFoX-S4?si=C7RTU5OMiJVE55Xg"
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
    </iframe>
    </div>
  )
}

export default WatchPage
