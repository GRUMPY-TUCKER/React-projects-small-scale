import React, { useState } from 'react'

const Nine = () => {

    const [backgroundColor,setBackgroundColor] = useState('yellow'); 
     const handleClick = () => {
        const newColor = backgroundColor === 'yellow' ? 'blue' : 'yellow';
        setBackgroundColor(newColor)
     }
  return (
    <div onClick={handleClick}
        style={{
            backgroundColor ,
            width : '200px',
            height : '200px',
            cursor : 'pointer'
        }}>
            Click Me To Change the Color
    </div>
  )
}

export default Nine