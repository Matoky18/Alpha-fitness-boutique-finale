import React, { useState } from 'react'
import "./LeftSide.css"
import Checkbox from '../../checkbox/Checkbox'
import RangeSlider from '../../RangeSlider/RangeSlider'
import Bouton from '../../bouton/Bouton'
import iconUp from '../../../assets/icon/icon-park-solid_up-two.png'

const LeftSide = ({ handleDownPrice ,handleUpPrice ,visibilityLS ,value,setValue}) => {

  const max = 800


  

   
  return (


    <div className = {`left-side-container ${visibilityLS} `} >

        
        <div className="filtre">
            <h2>Filtre :</h2> 
            
            <RangeSlider setNumber={setValue} value={value} RangePour={"Prix :"} unite={"€"} max={max} />

            <Bouton handleClick={handleDownPrice} className={"bouton rangeButton"} nameButton={"Prix"} icon={iconUp} classNameIcon={"iconUpPrice"} />
            <Bouton handleClick={handleUpPrice} className={"bouton rangeButton"} nameButton={"Prix"} icon={iconUp} classNameIcon={"iconDownPrice"} />
        
        
        </div>


    </div>
  )


}

export default LeftSide
