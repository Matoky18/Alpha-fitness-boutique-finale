import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import './PanierVide.css'
import React from 'react'
import Bouton from '../bouton/Bouton'
import { Link } from 'react-router-dom'


const PanierVide = () => {
  return (
    <div className='panier-vide-container' >

        <FontAwesomeIcon className='icon-bag-empty' icon={faBagShopping} />
       
       <div className="text-panier-vide">

            <h1>Votre panier est vide</h1>
            <h3>Ajoute votre articles préférés et reviens ici quand vous etês prêt.</h3>

       </div>

        <Link to = "/" >
          <Bouton  nameButton={"Retourner à la page d'acceuil"} className={"bouton bouton-panier-vide"} />
        </Link>        
        
    </div>
  )
}

export default PanierVide
