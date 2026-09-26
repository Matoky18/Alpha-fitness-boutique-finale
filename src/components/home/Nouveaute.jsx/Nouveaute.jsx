import { forwardRef, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Nouveaute.css'
import motionWear from '../../../assets/produit-img/new1.png'
import muscleMax from '../../../assets/produit-img/new2.png'
import powerGrip from '../../../assets/produit-img/new3.png'

const selections = [
  { id: 'sweat001', name: 'MotionWear', category: 'Vêtements', description: 'Votre prochain essentiel pour l’entraînement.', image: motionWear },
  { id: 'apmus001', name: 'MuscleMax', category: 'Musculation', description: 'Votre espace de sport, à la maison.', image: muscleMax },
  { id: 'gripo001', name: 'PowerGrip', category: 'Accessoires', description: 'Un nouvel allié pour vos séances.', image: powerGrip },
]

const Nouveaute = forwardRef(function Nouveaute(props, ref) {
  const trackRef = useRef(null)
  const nextCard = () => {
    const track = trackRef.current
    if (!track) return
    const animation = track.getAnimations()[0]
    if (animation) {
      const duration = Number(animation.effect.getTiming().duration)
      animation.currentTime = (Number(animation.currentTime) || 0) + duration / selections.length
    } else {
      const viewport = track.parentElement
      const card = track.querySelector('.nouveaute-card')
      const step = card.getBoundingClientRect().width + 24
      const atEnd = viewport.scrollLeft >= viewport.scrollWidth - viewport.clientWidth - 1
      viewport.scrollTo({ left: atEnd ? 0 : viewport.scrollLeft + step, behavior: 'instant' })
    }
  }

  return (
    <section ref={ref} className="nouveaute" aria-labelledby="nouveaute-title">
      <div className="nouveaute-container">
        <header className="nouveaute-heading">
          <h1 id="nouveaute-title">Nouveau</h1>
          <p>Fraîchement ajoutés, prêts à vous accompagner à l’entraînement.</p>
        </header>
        <div id="nouveaute-carousel" className="nouveaute-cards" tabIndex={0} aria-label="Nouveaux produits">
          <div className="nouveaute-track" ref={trackRef}>
          {[0, 1].map((copy) => (
          <div className="nouveaute-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
          {selections.map((product) => (
            <Link className="nouveaute-card" tabIndex={copy === 1 ? -1 : undefined} key={product.id} to={`/produit/${product.id}`} aria-label={`Découvrir ${product.name}`}>
              <img className="nouveaute-photo" src={product.image} alt={product.name} loading="lazy" />
              <span className="nouveaute-badge">Nouveau</span>
              <div className="nouveaute-info">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <div className="nouveaute-footer">
                  <span className="nouveaute-category">{product.category}</span>
                  <span className="nouveaute-cta">Découvrir <span aria-hidden="true">↗</span></span>
                </div>
              </div>
            </Link>
          ))}
          </div>
          ))}
          </div>
        </div>
      </div>
      <div className="nouveaute-controls">
        <button type="button" className="nouveaute-next" onClick={nextCard} aria-label="Afficher la carte suivante" aria-controls="nouveaute-carousel">
          Suivant <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  )
})

export default Nouveaute




