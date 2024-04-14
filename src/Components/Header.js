import React from 'react'
import {useDispatch} from "react-redux";
import { useState } from 'react';
import "../App.css"
import Sidebar from './Sidebar';
import { toggleMenu } from '../utils/appSlice';

const Header = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu());
  }

  
  return (
    <div className='header'>

      <img 
        className='hamburgerImg'
        src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-462145.png?f=webp&w=256"
        placeholder = "hamburger menu"
       onClick = {toggleMenuHandler}
      />
    
      <img 
      className='logoImg'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkr6OAPcvej8O3a0HzfJH5t9mf0wd4jpUOOaaEQXW27g&s"
        placeholder = "logo"
      />
      <div className='search'>
      <input 
      className='searchInput'
        type="text" 
        placeholder="search"/>
      <button
      className='searchBtn'
      >Search</button>
      </div>
      
      <img 
        className='userImg'
        src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
        placeholder = "user"
      />
      
    </div>
  )
}

export default Header
