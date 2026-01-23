import React from 'react'
import Bouton from '../bouton/Bouton'
import "./MobileMoney.css"

const MobileMoney = () => {
  return (

    <div className="Mobile-money-page">

        <div className='container-MobileMoney' >
        
            <div className="text-mobile-money">

                <h4>Commande #1024</h4>
                <h2>Mode de paiement sélectionné:</h2>
                <h1> Mobile Money</h1>
                <h5>Total à payer : 28 000 Ar</h5>

            </div>

            <div className="bouton-hero">

                <div className="hero-mobile-money">
                    
                    <p className='p1' >Vous avez choisi le paiement par Mobile Money.
                        Après la confirmation de votre commande,
                        notre équipe vous contactera par téléphone ou message
                        pour vous communiquer le numéro de paiement
                        et finaliser la transaction.
                    </p>

                    <p className='p2' >
                        Merci de vérifier que votre numéro de téléphone est correct
                        afin que nous puissions vous contacter rapidement.
                    </p>

                </div>
            
                <Bouton className = {"bouton bouton-confirmer-commande"} nameButton = {"Confirmer la commande"} />

            </div>
        
        </div>

    </div>
    
  )
}

export default MobileMoney
