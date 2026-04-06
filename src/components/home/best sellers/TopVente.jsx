import React from 'react'
import './TopVente.css'
import Bouton from '../../bouton/Bouton'
import { Link } from 'react-router-dom'
import { forwardRef } from 'react'; 

const TopVente = () => {


  return (
    <div>
      
      <div className="hero-populaire">

        <div className="left-side"> 

            <div className="details-top-vente details-top-vente-left">
                  
                <p>Bougez librement avec style et performance.</p>
                <Link to="/produit/debar002"><Bouton nameButton={"Acheter"} className={"bouton bouton-top-vente"} /></Link>
        
            </div>

          

        </div>

          <div className="details-mobile">
                <p>Bougez librement avec style et performance.</p>
               <Link to="/produit/debar002"> <Bouton nameButton={"Acheter"} className={"bouton bouton-top-vente"} /></Link>
            </div>

        <div className="right-side">

            <div className="details-top-vente details-top-vente-right">
                  
                <p>Style et confort pour vos sessions sportives et sorties.</p>
                <Link to="/produit/cqt001"><Bouton nameButton={"Acheter"} className={"bouton bouton-top-vente"} /></Link>
        
            </div>

        </div>

        <div className="details-mobile">
          <p>Style et confort pour vos sessions sportives et sorties.</p>
          <Link to="/produit/cqt001"><Bouton nameButton={"Acheter"} className={"bouton bouton-top-vente"} /></Link>
        </div>
       
      </div>
      <div className="bottom-side">
            <div className="details-top-vente details-top-vente-bottom">
                  
                <p>Pour des muscles plus forts et une récupération rapide.</p>
                <Link to="/produit/aminoc001"><Bouton nameButton={"Acheter"} className={"bouton bouton-top-vente "} /></Link>
        
            </div>
      </div>

      <div className="details-mobile">
          <p>Pour des muscles plus forts et une récupération rapide.</p>
          <Link to="/produit/aminoc001"><Bouton nameButton={"Acheter"} className={"bouton bouton-top-vente "} /></Link>
      </div>

    </div>
  )
}

export default TopVente
