import React, {  useContext } from 'react'
import './Add.css'
import plusAdd from '../../../../assets/icon/plusadd.png'
import { PanierContext } from '../../../../assets/Context/Panier/PanierContext'
import { FavorisContext } from '../../../../assets/Context/Favoris/FavorisContext'

const Add = ({produit }) => {

  const {ajouterPanier} = useContext(PanierContext)



  return (
    <div className='Add-container' onClick = {()=> ajouterPanier(produit)}>
      <img className='plusAdd' src= {plusAdd} alt="" /> 
      <p className='Add-hover' >Ajouter au panier<img className='plusAdd' src= {plusAdd} alt="" /> </p>
    </div>
  )
}

export default Add
