import React from 'react'
import "../App.css"
import MenuItems from "./MenuItems";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sideBar '>
      <ul>
        <Link to="/"><li>Home</li></Link>
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
