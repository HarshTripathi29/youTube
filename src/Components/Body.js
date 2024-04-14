import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from "./MainContainer"
import store from '../utils/store'
import {useSelector} from "react-redux"

const Body = () => {

  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)
  
  return (
    <div className='body'>    
    {(!isMenuOpen)? <Sidebar/> : null}
     
      <MainContainer/>
    </div>
  )
}

export default Body
