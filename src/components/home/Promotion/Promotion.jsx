import React, { useContext, useRef } from 'react'
import pm from "../../../assets/produit-img/halt2.png"
import gm from "../../../assets/produit-img/halt3.png"
import "./Promotion.css"
import Bouton from '../../bouton/Bouton'
import next from "../../../assets/icon/next.png"
import prev from "../../../assets/icon/prev.png"
import { ProduitContext } from '../../../assets/Context/ProduitContext'
import { Link } from 'react-router-dom'


const Promotion = () => {

  const produits = useContext(ProduitContext)

  const produitPromo = produits.filter(p => p.promo === true)

  const allpromoref = useRef(null)

  const scrollNext = ( ) => {
      if (allpromoref.current) {
        allpromoref.current.scrollBy({
        left : allpromoref.current.clientWidth/2 ,
        behavior : "smooth"

      })
      }
  }
  const scrollPrev = ( ) => {
      if (allpromoref.current) {
        allpromoref.current.scrollBy({
         left : -allpromoref.current.clientWidth/2 ,
        behavior : "smooth"

      })
      }
  }

  return (

    <div className='promotion-container' >

      <h1>Offre exclusive</h1>

      <div className="promo-hero">

        <img className='prev' src={prev} alt="" onClick={scrollPrev} />

        <div className="all-promo" ref={allpromoref} >

          {produitPromo.map(p =>

            <div className="one-promo">

              <div className="image1-item" style={{ backgroundImage: `url(${p.img})` }} >
                <Link to={`/produit/${p.id}`} ><Bouton nameButton={"Acheter"} className={"bouton bouton-promo"} /></Link>
              </div>

              <div className="image2-item" style={{ backgroundImage: `url(${p.img1})` }} ></div>

            </div>
          )}


        </div>



        <img className='next' src={next} alt="" onClick={()=> scrollNext()} />

      </div>

      <div className="phrase">
        <h1 className='chiffre-promo' >-30%</h1>
        <h4>Acheter dès maintenant!</h4>
      </div>

    </div>
  )
}

export default Promotion
