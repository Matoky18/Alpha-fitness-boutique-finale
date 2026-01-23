import React from 'react'
import "./LeftSide.css"
import Checkbox from '../../checkbox/Checkbox'
import RangeSlider from '../../RangeSlider/RangeSlider'



const LeftSide = () => {


  return (


    <div className='left-side-container' >


        
        <div className="filtre">
            <h2>Filtrer :</h2>
            <RangeSlider RangePour={"Prix :"} unite={"€"} max={100} />
            <RangeSlider RangePour={"Réduction :"} unite={"%"} max={50} />
        </div>


    </div>
  )


}

export default LeftSide
