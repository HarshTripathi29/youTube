import React, { useEffect } from 'react'
import {useDispatch} from "react-redux";
import { useState } from 'react';
import "../App.css"
import Sidebar from './Sidebar';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';

const Header = () => {

  const [searchQuery, setSearchQuery] = useState(" ");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const dispatch = useDispatch();

  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu());
  }

  // debouncing
  useEffect(()=>{
    const timer = setTimeout(()=>getSearchSuggestions(),200);
    return ()=>{
      clearTimeout(timer);
    };
  },[searchQuery]);

  const getSearchSuggestions = async()=>{
    console.log("API call");
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json = data.json();
    setSuggestions(json[1]);
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
        placeholder="search"
        onChange={(e)=>setSearchQuery(e.target.value)}
        onFocus={(e)=>setShowSuggestion(true)}
        onBlur={(e)=>setShowSuggestion(false)}
        />
      <button
      className='searchBtn'
      >Search</button>
      </div>
      {showSuggestion && (
      <div className='searchSuggestions'>
        <ul>
          {
            suggestions.map((s)=>(
              <li key={s}>
                {s}
              </li>
            ))
          }
        </ul>
      </div>
      )
      }
      <img 
        className='userImg'
        src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
        placeholder = "user"
      />
      
    </div>
  )
}

export default Header
