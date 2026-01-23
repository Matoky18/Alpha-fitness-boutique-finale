import React from 'react'
import "./Resultats.css"
import { Link } from 'react-router-dom'

const Resultats = ({resultat}) => {
  return (
    <div className='resultat-search-container'  >
        
        <h2> {resultat.map(produit=>
                
            <li >
              
             <Link  to = {`/produit/${produit.id}`}> {produit.produitName}</Link>
            
            </li>

        )} 
        
        </h2>
        
    </div>
  )
}

export default Resultats
