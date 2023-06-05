
import React, { useState } from 'react'
import "./Count.css"

document.title = 'Counter App'
const Count = () => {
  const [count, setCount] = useState(0);
  const decrement = () =>{
   if( count === 0){
    return 
   }
   else{
    setCount (count- 1)
   }
  }
  return (
  <div className='container'>
    <div className='countContainer'>
    <div className='display'>{count}</div>
    <p>You have Click {count} time(s)</p>
    <div className="buttonContainer">
    <button className='increase' onClick={() => setCount (count+ 1)}>Increase</button>
    <button className='decrease' onClick={decrement}>Decrease</button>
    </div>
    </div>
  </div>
  )
}

export default Count