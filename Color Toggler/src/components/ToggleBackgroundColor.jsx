import React from 'react'
import { useState } from 'react'
import '../style.css'
const ToggleBackgroundColor = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [textColor, setTextColor] = useState('#1b1b1b');

  const handleClick = () => {
    setBackgroundColor(backgroundColor === 'white'? '#1b1b1b' : 'white');
    setTextColor(textColor === '#1b1b1b' ? '#ffa31a' : '#1b1b1b');
  }
  return(
    <div style={{backgroundColor, color: textColor }}>
      <button
      onClick={handleClick}
      style={{
        
        color: textColor,
        border: `2px solid ${textColor}`
      }}
      >
        {backgroundColor === 'white'? 'White Theme' : 'Black Theme'}
      </button>
      <section className="content">
        <h1>Welcome to <br />
        SPaCE's World</h1>
      </section>
    </div>
  )
}

export default ToggleBackgroundColor
