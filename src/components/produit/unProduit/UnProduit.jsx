import React, { useContext } from 'react'
import "./UnProduit.css"
import Add from './Add/Add'
import { Link } from 'react-router-dom'
import { ProduitContext } from '../../../assets/Context/ProduitContext'
import { FavorisContext } from '../../../assets/Context/Favoris/FavorisContext'

const UnProduit = ({id}) => {

  const produits = useContext(ProduitContext);

  const produit = produits.find(p=>p.id===id)

  const {imageProduit, prix, produitName, details} = produit;

  const {handleLike,likePhoto} = useContext(FavorisContext)


  return (

    <div className='UnProduit-container'  style={{backgroundImage : `url(${imageProduit})`}}  >
           

            <div className="produit-element"  >

                <div className="like-container">
                    <img className="like" onClick={()=> handleLike(produit)} src= {likePhoto(produit)} alt="" />
                </div>
                
               <div className="bottom-block-produit">
                     <div className="details-Produit">

                      <Link className='link-produit' to={`/produit/${id}`}>
                         <h4 className='nom-produit' > {produitName} </h4>
                      </Link>
                      

                        <p className='details' > {details} </p>

                        <h3 className='prix'> {prix} </h3>

                    </div>

                    <Add produit={produit}/>
               </div>

            </div>
    </div>

  )
}

export default UnProduit


// <del> = élément HTML sémantique, pour texte supprimé / ancien prix

//<span> = conteneur inline pour appliquer du style ou sélectionner un petit morceau de text