import React, { useState } from 'react'

const Five = () => {
    const [isToggled,setIsToggled] = useState(false);
    const handleToggle = () => {
        setIsToggled(!isToggled);
    }
  return (
    <div>
        <label>
            <input type='checkbox' onChange={handleToggle}/>
        </label>
        <p>{isToggled?"On":"Off"}</p>
    </div>
  )
}

export default Five