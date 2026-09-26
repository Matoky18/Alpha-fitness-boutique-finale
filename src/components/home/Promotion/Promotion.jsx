import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProduitContext } from '../../../assets/Context/ProduitContext'
import barresPompesPromotion from '../../../assets/produit-img/barres-pompes-promotion.png'
import halteresPromotion from '../../../assets/produit-img/halteres-promotion.png'
import './Promotion.css'

const Promotion = () => {
  const produits = useContext(ProduitContext)
  const offres = produits.filter((produit) => produit.promo === true)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isImageHovered, setIsImageHovered] = useState(false)

  useEffect(() => {
    if (offres.length < 2 || isImageHovered) return undefined

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % offres.length)
    }, 2000)

    return () => window.clearInterval(intervalId)
  }, [offres.length, isImageHovered])

  if (!offres.length) return null

  const index = activeIndex % offres.length
  const produit = offres[index]
  const navigate = (direction) => setActiveIndex((current) => (current + direction + offres.length) % offres.length)

  return (
    <section className="promotion-container" aria-labelledby="promotion-title">
      <div className="promotion-banner">
        <div className="promotion-copy">
          
      
          <h2 id="promotion-title">Offre exclusive</h2>
          <p className="promotion-discount">−30<span>%</span></p>
      
          <div className="promotion-product" key={produit.id} aria-live="polite" aria-atomic="true">
            <span className="promotion-category">{produit.categorie}</span>
            <h3>{produit.produitName}</h3>
            <p>{produit.details}</p>
          </div>

          <Link className="promotion-cta" to={`/produit/${produit.id}`}>
            Profiter de l’offre <span aria-hidden="true">↗</span>
          </Link>

        </div>
        <div
          className="promotion-visual"
          key={produit.id}
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          
          <img src={produit.id === 'pubar001' ? barresPompesPromotion : produit.id === 'ha002' ? halteresPromotion : (produit.img1 || produit.img || produit.imageProduit)} alt={produit.produitName} loading="lazy" />
        </div>
      </div>
      {offres.length > 1 && (
        <div className="promotion-navigation" aria-label="Navigation des offres">
          <button type="button" className="promotion-arrow" onClick={() => navigate(-1)} aria-label="Offre précédente">←</button>
          <div className="promotion-indicators">
            {offres.map((offre, position) => (
              <button type="button" key={offre.id} className={`promotion-dot${position === index ? ' is-active' : ''}`} onClick={() => setActiveIndex(position)} aria-label={`Voir l’offre ${offre.produitName}`} aria-current={position === index ? 'true' : undefined} />
            ))}
          </div>
          <button type="button" className="promotion-arrow" onClick={() => navigate(1)} aria-label="Offre suivante">→</button>
        </div>
      )}
    </section>
  )
}

export default Promotion

