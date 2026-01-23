import React from 'react'
import './Nouveaute.css'
import Bouton from "../../bouton/Bouton"
import { faAngleRight , faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'



const Nouveaute = () => {
  return (
    <div className="nouveaute">

      <div className="container-nouveaute" >

        <div className="titre">
                
            <h1>Nouveau</h1>
            <p>Fraîchement ajoutés, prêts à vous accompagner à l’entraînement.</p>
             

        </div>

      <div className="hero-section-new">

              <FontAwesomeIcon className='angle prev' icon={faAngleLeft} />

              <div className="hero">

                    <div className="hero-content">
                          <div className="produit produit1"> <Link to = "/produit/sweat001" > <Bouton className={"bouton boutonNouveau"} nameButton={"MotionWear"} /></Link> </div>
                          <div className="produit produit2"> <Link to = "/produit/apmus001" > <Bouton className={"bouton boutonNouveau"} nameButton={"MuscleMax"} /></Link> </div>
                          <div className="produit produit3"> <Link to = "/produit/gripo001" > <Bouton className={"bouton boutonNouveau"} nameButton={"PowerGrip"} /></Link> </div>
                    </div>
                  
              </div>

              <FontAwesomeIcon className='angle next' icon={faAngleRight} />

      </div>

      </div>

    </div>
  )
}

export default Nouveaute
