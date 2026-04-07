import React, { useEffect } from 'react'
import './TopVente.css'
import Bouton from '../../bouton/Bouton'
import { Link } from 'react-router-dom'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TopVente = () => {

  const leftImage = React.useRef(null);
  const rightImage = React.useRef(null);
  const bottomImage = React.useRef(null);

  useEffect(()=>{

    gsap.fromTo(leftImage.current ,

      {
          x: -500,
          opacity: 0,
      },

      {
        scrollTrigger : {
          trigger : leftImage.current,
          start: " 80% center",
          end: "80% 20%",                           
          // markers: true,
          toggleActions: "play reverse play reverse",

        },
          x: 0 ,
          duration: 1.5,
          yoyo: true,
          opacity: 1,
          delay : 0.3,               
                
      }
    )

    gsap.fromTo(rightImage.current ,
      {
          x: 500,
          opacity: 0,
      },

      {
        scrollTrigger : {
          trigger : rightImage.current,
          start: " 70% center",
          end: "70% 30%",
          // markers: true,
          toggleActions: "play reverse play reverse",

        },
          x: 0 ,
          duration: 1.5,
          yoyo: true,
          opacity: 1,
          delay : 0.3,

      }
    )

    gsap.fromTo (bottomImage.current ,
    {
        y: 250,
        opacity: 0,
    },
      {
        scrollTrigger : {
        trigger: bottomImage.current,
        start: "-30% center",
        end: "50% 25%",
        // markers: true,
        toggleActions: "play none none none",
    },

        y:0,
        duration : 1 ,
        yoyo : true,
        opacity:1,
        delay : 0.2,

      }
    )

  },[])
 

  return (
    <div  >
      
      <div style={{ overflowX: "hidden" }} className="hero-populaire">

        <div  ref={leftImage} className="left-side"> 

            <div className="details-top-vente details-top-vente-left">
                  
                <p>Bougez librement avec style et performance.</p>
                <Link to="/produit/debar002"><Bouton nameButton={"Acheter"} className={"bouton bouton-top-vente"} /></Link>
        
            </div>          

        </div>


        <div className="details-mobile">
              <p>Bougez librement avec style et performance.</p>
              <Link to="/produit/debar002"> <Bouton nameButton={"Acheter"} className={"bouton bouton-top-vente"} /></Link>
        </div>


        <div ref={rightImage} className="right-side">

            <div className="details-top-vente details-top-vente-right">
                  
                <p>Style et confort pour vos sessions sportives et sorties.</p>
                <Link to="/produit/cqt001"><Bouton nameButton={"Acheter"} className={"bouton bouton-top-vente"} /></Link>
        
            </div>

        </div>

        <div className="details-mobile">
          <p>Style et confort pour vos sessions sportives et sorties.</p>
          <Link to="/produit/cqt001"><Bouton nameButton={"Acheter"} className={"bouton bouton-top-vente"} /></Link>
        </div>
       
      </div>

      <div ref={bottomImage} style={{overflowY : "hidden" , height : "70vh"}} className="bottom-side">
            <div className="details-top-vente details-top-vente-bottom">
                  
                <p>Pour des muscles plus forts et une récupération rapide.</p>
                <Link to="/produit/aminoc001"><Bouton nameButton={"Acheter"} className={"bouton bouton-top-vente "} /></Link>
        
            </div>
      </div>

      <div className="details-mobile">
          <p>Pour des muscles plus forts et une récupération rapide.</p>
          <Link to="/produit/aminoc001"><Bouton nameButton={"Acheter"} className={"bouton bouton-top-vente "} /></Link>
      </div>

    </div>
  )
}

export default TopVente
