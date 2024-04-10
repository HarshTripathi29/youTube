import React from 'react'

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
