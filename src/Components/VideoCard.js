import React from 'react'

const VideoCard = ({title, thumbnail, views}) => {
  return (
    <div className='card'>
      <img 
        className=""
        src={thumbnail}
        placeholder = "thumbnail"
      />
      <h3>{title}</h3>
      <p>{views}</p>
    </div>
  )
}

export default VideoCard
