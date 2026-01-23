import React, {  useContext } from 'react'
import  "./DetailsProduit.css"
import { useParams } from 'react-router-dom'
import { ProduitContext } from '../../assets/Context/ProduitContext';
import Bouton from '../bouton/Bouton';
import { PanierContext } from '../../assets/Context/Panier/PanierContext';
import { FavorisContext } from '../../assets/Context/Favoris/FavorisContext';



const DetailsProduit = () => {

  const produits = useContext(ProduitContext);
  const {handleLike,liked,likePhoto} = useContext(FavorisContext)
  const {ajouterPanier} = useContext(PanierContext)

  const { id } = useParams();
  

  const produit = produits.find(p=>p.id===id) //pour designer les elements dans un objet , Number(id) : pour convertir le id en number

  return (

    <div className='container-details-proudit'>

    <div className="container-photo">

        <div className="box-photo">
            <img src= {produit?.img} alt="" />
            <img src= {produit?.img2} alt="" />
            <img src={produit?.img1} alt="" />
            
            <img src= {produit?.img3} alt="" />
            <img src= {produit?.img4} alt="" />
            <img className='image-details' src= {produit.imageProduit} alt="" />   
         </div>  

    </div>  

        <div className="buy-box">

            <div className="details-like">

                <div className="nom-details">
                    <h2>{produit.produitName}</h2> 
                    <p>{produit.details2}</p>
                </div>

                <img onClick={() => handleLike(produit)} className='likeIcon' src= {likePhoto(produit)} alt="" /> 
            
            </div>
            
            <h3>${produit.prix}</h3>

            <Bouton nameButton={"Ajouter au panier"} className={"bouton bouton-ajouter-panier"} handleClick={()=> ajouterPanier(produit)} />
    
        </div>
      
    </div>

  )
}

export default DetailsProduit
