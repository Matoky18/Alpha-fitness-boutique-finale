import React, { useContext } from 'react'
import { PanierContext } from '../../assets/Context/Panier/PanierContext'
import './Cart.css'
import Bouton from '../bouton/Bouton'
import PanierVide from './PanierVide'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'

const Cart = () => {

  const navigate = useNavigate()
    
    const {panier,prixTotal,ajouterPanier,supprimerProduit,zeroProduit} = useContext(PanierContext)

    if ( panier.length === 0 ) {
        return <PanierVide/>
    }

    const handleCheckOut = () => {
        navigate("/commande")
    }

  return (

    <div className='cart-container' >

         <main>
           <h1>Mon panier</h1>
        
            {panier.map((produit)=>
            
            <div className='container-produits-panier'  >
                
              
                <div className="image-panier" style={{backgroundImage : `url(${produit.imageProduit})` }} >

                </div> 
              
                <div className="details-panier">

                <div className="top-block">

                    <div className="details">
                        <h2>{produit.produitName} </h2>  
                        <p>{produit.details}</p>
                    </div>
                    
                    <FontAwesomeIcon className='icon-supprimer-tout' onClick={()=>zeroProduit(produit)} icon={faTrashCan} />
                    
                </div>
                    

                  <div className="bottom-block-cart">

                        <h3>{produit.prix}$ </h3>

                        <div className="modifier-quantite">

                              <FontAwesomeIcon icon={faMinus} className='sup-pan' onClick={()=>supprimerProduit(produit)} />
                              <h4> {produit.quantite} </h4>
                              <FontAwesomeIcon icon={faPlus} className='add-pan' onClick={()=>ajouterPanier(produit)} />
                        
                        </div>
                  </div>
                  
                </div>
              

            </div>

          )}
         </main>

          
          <div className="right-side-cart">

              <div className="item-produit-cart">
                    {panier.map((produit)=> 
                        
                      <div className="box-item">

                          <div className="name-number">
                            {produit.produitName}({produit.quantite})
                          </div>

                          <div className="prix-produit-item">${produit.prix}</div>
                          
                      </div>
                                              
                    )}
              </div>

              <div className="prix-total">
                  Sous-total : ${prixTotal}
              </div>
              
              <Bouton handleClick = {()=> handleCheckOut()} 
                  nameButton={"Passer la commande"} 
                  className={"bouton bouton-passer-commande"} 
              />
              
          </div>

    </div>

  )}

export default Cart
