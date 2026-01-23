import React from 'react'
import "./RangeSlider.css"


const RangeSlider = ({ RangePour ,max,unite}) => {
  return (
    <div className='range-slider' >
      <h3>{RangePour}</h3> <div className="Price">0{unite} -  {max}{unite}</div>
      <input type="range" />
    </div>
  )
}

export default RangeSlider
