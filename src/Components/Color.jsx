import React, { useState } from 'react'

const Color = () => {
    const [color, changeBgcolor] = useState("blue")
 changeBgcolor( "yellow") 
  return (
    <div className="con">
        <p className='colorName'></p>
        <button className='changeColor'></button>
    </div>
  )
}

export default Color