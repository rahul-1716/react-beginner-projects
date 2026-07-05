import React from 'react'
import './Colors.css'
import Input from '../../components/Input'
const Colors = ({handleChange}) => {
  return (
    <div className="">
      <h2 className="sidebar-title color-title">Colors</h2>
       <label htmlFor="" className="sidebar-label-container">
            <input type="radio" name="test2" value="" onChange={handleChange} id="" />
            <span className="checkmark all"></span>All
        </label>
          <Input handleChange={handleChange} value="black" title="Black" name="test1" color="black" />
          <Input handleChange={handleChange} value="blue" title="Blue" name="test1" color="blue" />
          <Input handleChange={handleChange} value="red" title="Red" name="test1" color="red" />
          <Input handleChange={handleChange} value="green" title="Green" name="test1" color="green" />
          <Input handleChange={handleChange} value="black" title="Black" name="test1" color="black" />

        <label htmlFor="" className="sidebar-label-container">
            <input type="radio" name="test1" value="white" onChange={handleChange} id="" />
            <span className="checkmark" style={{background: "white", border: "2px solid black"}}></span>White
        </label>
      </div>
  )
}

export default Colors