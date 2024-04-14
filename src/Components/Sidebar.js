import React from 'react'
import "../App.css"
import MenuItems from "./MenuItems"

const Sidebar = () => {
  return (
    <div className='sideBar '>
      
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <ul>
      <h3>Subscriptions</h3>
        <li>Sports</li>
        <li>Music</li>
        <li>Gaming</li>
        <li>Movies</li>    
      </ul>
      <ul>
      <h3>Watch Later</h3>
      <li>Sports</li>
        <li>Music</li>
        <li>Gaming</li>
        <li>Movies</li>     
      </ul>
    </div>
  )
}

export default Sidebar
