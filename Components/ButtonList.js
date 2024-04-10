import React from 'react'
import Button from './Button'
import "../App.css"

const ButtonList = () => {

  const btn = ["all", "gaming", "songs", "live", "soccer", "cricket", "cooking"]
  return (
    <div className='buttonList'>
      {
        btn.map((button)=>(
          <Button title={button}/>
        ))
      }
    </div>
  )
}

export default ButtonList
