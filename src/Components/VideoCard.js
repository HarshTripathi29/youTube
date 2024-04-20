import React from 'react'

const VideoCard = ({title, thumbnail, views}) => {
  return (
    <div className='card'>
      <img 
        className="cardImg"
        src={thumbnail}
        placeholder = "thumbnail"
      />
      <ul>
        <li><b>{title}</b></li>
        <li>{views} views</li>
      </ul>
      {/* <p className='cardTitle'>{title}</p>
      <p className='cardViews'>{views}</p> */}
    </div>
  )
}

export default VideoCard
