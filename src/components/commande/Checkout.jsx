import React from 'react'
import Input from '../Input/Input'
import './Checkout.css'
import visa from "../../assets/icon/visa.png"
import { Link, useNavigate } from 'react-router-dom'

const Checkout = () => {

  const navigate = useNavigate();

  return (
    <div className="page-checkout">
      <div className='checkout-container' >

        <h1>Information de livraison</h1>

            <div className="hero-checkout">

                <div className="nom-prenom">
                    
                    <Input className={"nom input-checkout"} placeholder={"Nom"} />
                    <Input className={"prenom input-checkout"} placeholder={"Prénom(s)"} />
                
                </div>

                <Input className={"input-checkout"} placeholder={"Téléphone"} />
                <Input className={"input-checkout"} placeholder={"Email"} />
                
                <div className="ville-codepastal">

                    <Input className={"input-checkout"} placeholder={"Ville"} />
                    <Input className={"input-checkout"} placeholder={"Code postal"} />
                
                </div>

                <Input className={"input-checkout"} placeholder={"Adresse"} />
                
            </div>

            <div className="methode-paiement">
              <h2>Methode de paiement :</h2>

              <div className="non-visa">
                  <div on className="payer-livraison"><Link to="/PayerLivraison" >Payer à la livraison</Link></div>
                  <div className="mobile-money"><Link to= "/MobileMoney" >Mobile money</Link></div>
              </div>

              <div ><Link to="/Visa"><img className="visa" src= {visa} alt="" /></Link></div>

            </div>

        </div>
    </div>
  )
}

export default Checkout
