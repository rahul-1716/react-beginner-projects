import React from 'react'
import { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import '../style.css'
const SearchIcon = () => {
    const [backgroundColor, setBackgroundColor] = useState('white')
    const [showInput, setShowInput] = useState(false);

    const handleClick = (event) => {
        setBackgroundColor('#1a1a1a')
        if(event.target.className === 'container'){
            setShowInput(false);
            setBackgroundColor('white')
        }
    };
  return (
    <section 
    className="container"
    style={{
        backgroundColor,
    }}
    onClick={handleClick}
    >
        {showInput ? (
            <input type="text" name="" id="" placeholder='SEARCH...' />
        ) : (
            <FaSearch onClick={() => setShowInput(true)} />
        )}


    </section>
  )
}

export default SearchIcon
