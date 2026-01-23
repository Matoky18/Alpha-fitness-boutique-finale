import React from 'react'
import UnProduit from './unProduit/UnProduit'
import "./Produit.css"
import LeftSide from './leftSide/LeftSide'
import RightSide from './rightSide/RightSide'
import { Link } from 'react-router-dom'

const Produit = ({refDiv,titre,Categorie}) => {
  
  return (
    
    <div className='container-hero' ref={refDiv}>

      <LeftSide/>

      <div className="produit-container">
        
            <h1> {titre} </h1>

            <div className="produit-hero">
                                   
                  {Categorie.map((prod)=>
                    
                       <UnProduit key={Math.random()} id = {prod.id} />
                                       
                  )}                

            </div>

      </div>

      <RightSide/>
      
    </div>
  )
}

export default Produit
