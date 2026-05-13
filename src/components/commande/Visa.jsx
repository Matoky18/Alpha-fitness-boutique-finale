import React, { useContext } from 'react'
import "./Visa.css"
import Input from "../../components/Input/Input"
import Bouton from '../bouton/Bouton'
import { PanierContext } from '../../assets/Context/Panier/PanierContext'

const Visa = () => {


  const {prixTotal} = useContext(PanierContext)


  return (

    <div className="visa-container">
        <div className='container-visa' >

          <div className="block1-visa">

                <h4>Commande  #541</h4>

                <h1>Mode de paiement sélectionné : Visa</h1>
                              
                <h2>Total : {prixTotal} $ </h2>

          </div>
            
            <div className="hero-visa">
              
                <h2 className='titre-input-visa' >
                    Paiement sécurisé par carte Visa
                </h2>

                <div className="input-visa">
                      <Input className={"input-item-visa"} placeholder={"Nom sur la carte"} />
                      <Input className={"input-item-visa"} placeholder={"Numéro sur la carte"} />
                      <Input className={"input-item-visa"} placeholder={"Date d'expiration"} />
                      <Input className={"input-item-visa"} placeholder={"Code de sécurité"} />
                </div>
            </div>

            <div className="block2">

                <p>
                  Vos informations sont 100 % sécurisées.
                </p>

                <div className="attention">
                      Attention : Le montant sera débité immédiatement.
                      Vérifiez vos informations avant de confirmer.
                </div>

                <Bouton className={"bouton bouton-confirmer-commande"} nameButton={"Valider le paiement"} />

            </div>


        </div>
    </div>

    
  )
}

export default Visa
 