import '../bouton/Bouton.css'
import React from 'react'

const Bouton = ({classNameIcon,alt,icon,handleClick,nameButton,className}) => {
  return (
    <div>
       <button className={className} onClick={handleClick} >
        
           {nameButton}
           
           <img src= {icon} alt = {alt} className= {classNameIcon} />

       </button>
    </div>
  )
}


export default Bouton
