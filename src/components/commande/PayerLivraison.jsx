import React, { useContext } from 'react'
import Bouton from '../bouton/Bouton'
import './PayerLivraison.css'
import { PanierContext } from '../../assets/Context/Panier/PanierContext'


const PayerLivraison = () => {
    const {prixTotal} = useContext(PanierContext)

  return (
    <div className='container-PayerLivraison' >

          <div className="hero-PayerLivraison">

            <div className="block1-PayerLivraison">
              <h4>Commande #1025</h4>
              <h1>Vous payerez à la réception de votre commande</h1>
              <h3>Total à payer : {prixTotal} $ </h3>
            </div>

          <div className="block2">

              <p className='p1-livr' >Vous avez choisi le paiement à la livraison.
                Vous réglerez le montant total au moment de la réception
                de votre commande, directement au livreur.
              </p>

              <p className='p2-livr' >
                <h5>Livraison estimée :</h5> 2 à 4 jours ouvrables
                <br />
                Paiement en espèces ou selon les modalités du livreur
              </p>

          </div>

            <div className="block3">

                <p className='p1' >Merci de vous assurer que votre numéro de téléphone
                  et votre adresse de livraison sont corrects,
                  afin de faciliter la remise de votre commande.
                </p>

                <Bouton nameButton={"Confirmer la commande"} className={"bouton bouton-confirmer-commande"} />

          </div>

          </div>
     
    </div>
  )
}

export default PayerLivraison
