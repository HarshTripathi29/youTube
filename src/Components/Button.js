import React from 'react'
import "../App.css"

const Button = ({title}) => {
  return (
    <div>
      <button className='buttonMainContainer'>
        {title}
      </button>
    </div>
  )
}

export default Button
