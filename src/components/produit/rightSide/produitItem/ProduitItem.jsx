import React, { useContext } from 'react'
import { PanierContext } from '../../../../assets/Context/Panier/PanierContext'
import './ProduitItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'



const ProduitItem = () => {

    const {panier,supprimerProduit,ajouterPanier} = useContext(PanierContext)

  return (
    <div className='container-produitItem' >

        {panier.map((produit)=>
        
            <div className='itemProduit' >

              <img className='image' src= {produit.imageProduit} alt="" />

             <div className="details">

                  <div className="quant">
                    
                      <FontAwesomeIcon icon={faMinus} className='sup-pan' onClick={()=>supprimerProduit(produit)} />
                          <p>{produit.quantite}</p>
                      <FontAwesomeIcon icon={faPlus} className='add-pan' onClick={()=>ajouterPanier(produit)} />              

                  </div>

                  <div className="prix">
                    ${produit.prix}
                  </div>

             </div>

            </div>
        
        )}


    </div>
  )
}

export default ProduitItem
