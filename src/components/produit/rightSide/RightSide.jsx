import React, { useContext } from 'react'
import "./RightSide.css"
import Bouton from '../../bouton/Bouton'
import panierIcon from '../../../assets/icon/panier.png'
import ProduitItem from './produitItem/ProduitItem'
import { PanierContext } from '../../../assets/Context/Panier/PanierContext'
import { Link } from 'react-router-dom'


const RightSide = () => {
  
    const {prixTotal} = useContext(PanierContext)
  
  return (
    <div className='right-side-container' >

      <div className="montant-total">

        Montant total : 
        <div className="prix"> {prixTotal}$</div>

      </div>

      <div className="block1">
          <ProduitItem/>
      </div>

      < Link to={"/panier"}>
          <Bouton classNameIcon={"panierIcon"} icon={panierIcon} className={"Bouton-right-side"} nameButton={"Mon panier"} />
      </Link>

    </div>
  )


}


export default RightSide
