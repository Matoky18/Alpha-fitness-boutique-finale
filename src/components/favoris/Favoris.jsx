import React, { useContext } from 'react'
import "./Favoris.css"
import { FavorisContext } from '../../assets/Context/Favoris/FavorisContext'
import { PanierContext } from '../../assets/Context/Panier/PanierContext'
import addIcon from '../../assets/icon/plusadd.png'

const Favoris = () => {

    const {liked,handleLike,likePhoto} = useContext(FavorisContext)

    const {ajouterPanier} = useContext(PanierContext)

  return (
    <div className='favoris-container' >
        <div className="block1">

            <div className="p1">
              Ne perdez pas vos articles préférés !
            </div>

            <div className="p2">
              Ici se trouvent tous les produits que vous adorez. 
              Gardez-les à portée de main pour ne rien manquer et revenir 
              facilement les commander quand vous le souhaitez !
            </div>

        </div>
       
       <div className="block-hero-favoris">

          <h1>Mes préférés</h1>

          <div className="hero-favoris">


          {liked.map(item=>
                              
                <div key={item.id} className='item-fav' style={{backgroundImage: `url(${item.imageProduit})` }} > 
                
                    <div className="b1">
                       
                       <h3>{item.produitName}</h3>
                      
                      <img className='likeIcon' src= {likePhoto(item)} onClick={()=> handleLike(item)} alt="" />        

                    </div>

                    <div className="b2">

                         <h3>${item.prix} </h3>
                                    
                         <img className='addIcon' src= {addIcon} onClick={()=>ajouterPanier(item)} alt="" />
             
                    </div>

                </div>
              
            )}
            </div>
            
        </div>

    </div>
  )
}

export default Favoris
