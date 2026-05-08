import React, { useState } from 'react'
import "./LeftSide.css"
import Checkbox from '../../checkbox/Checkbox'
import RangeSlider from '../../RangeSlider/RangeSlider'



const LeftSide = ({value,setValue}) => {

  const max = 800
   
  return (


    <div className='left-side-container' >

        
        <div className="filtre">
            <h2>Filtre :</h2> 
            
            <RangeSlider setNumber={setValue} value={value} RangePour={"Prix :"} unite={"€"} max={max} />

        </div>


    </div>
  )


}

export default LeftSide
