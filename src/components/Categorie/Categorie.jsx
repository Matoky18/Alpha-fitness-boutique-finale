import React, { useContext } from 'react'
import Produit from '../produit/Produit';
import { ProduitContext } from '../../assets/Context/ProduitContext';
import "./Categorie.css"


const Categorie = ({categorie}) => {  
  
  const produitsNutritionContext = useContext(ProduitContext);
  const produits = produitsNutritionContext.filter(prod=>prod.categorie===categorie)
  
  return (
    <div className='categorie' >
        <Produit path={`/categorie/${categorie}`} titre={categorie} Categorie={produits} />
    </div>
  )
}

export default Categorie
