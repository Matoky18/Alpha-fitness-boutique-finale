import React, { useState } from 'react'
import UnProduit from './unProduit/UnProduit'
import "./Produit.css"
import LeftSide from './leftSide/LeftSide'
import RightSide from './rightSide/RightSide'
import { Link } from 'react-router-dom'

const Produit = ({refDiv,titre,Categorie}) => {

  const [value,setValue] = useState(800) 

  const [leftsideVisible,setLeftsideVisible] = useState(false)
  
  const handleClick = () => {

    setLeftsideVisible(!leftsideVisible)

  }

  const visibilityLS = leftsideVisible ? "visible" : "hidden";



  return (
    
    <div className='container-hero' ref={refDiv}>

 
      <LeftSide visibilityLS={visibilityLS} value={value} setValue={setValue} />
               

      <div className="produit-container">

        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
        </svg>
        
            <h1> {titre} </h1>

            <div className="produit-hero">
                                   
                  {Categorie.filter(element=> Number(element.prix) <= value).map((prod)=>
                    
                       <UnProduit key={Math.random()}  id = {prod.id} />
                                       
                  )}                

            </div>

      </div>

      <RightSide/>
      
    </div>
  )
}

export default Produit
