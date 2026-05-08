import React, { useState } from 'react'
import "./RangeSlider.css"


const RangeSlider = ({ value , setNumber ,RangePour ,max,unite}) => {

  

  const handleChange = (e) => {
     setNumber(Number(e.target.value))
  }


  return (
    <div className='range-slider' >
      <h3>{RangePour}</h3>   <div className="Price">0{unite} -  {value}{unite}</div>
      <input type="range" value={value} max={max} onChange={handleChange} />
    </div>
  )
}

export default RangeSlider
