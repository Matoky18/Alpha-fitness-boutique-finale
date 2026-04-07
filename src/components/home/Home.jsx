import NavBar from "../header/NavBar";
import React, { use, useRef } from 'react'
import './Home.css'
import bgHome from '../../assets/bghome.png'
import Bouton from "../bouton/Bouton";
import Login from "../login/Login";
import Nouveaute from "./Nouveaute.jsx/Nouveaute";
import TopVente from "./best sellers/TopVente";
import Promotion from "../home/Promotion/Promotion";
import Search from "../header/search/Search";
import IconPanier from "../../assets/icon/addpanier.png"


const Home = ({refDiv}) => {

  const refNouv = useRef();

  const handlescroll = () => {
      refNouv.current.scrollIntoView({ behavior: 'smooth' });
  }  
  
  
  return (
    <div className="container-home" ref={refDiv}  >

      <Search className = {"searchBar-Nav-mobile"} searchContainer= "search-container-mobile" searchInput="searchInput-mobile" loupeSearch="loupeSearch-mobile" />  
         
          <div className='heroHome' >
              
            <div className="text-home">
                <h1>
                  Atteignez vos objectifs sportifs avec le meilleur équipement !
                </h1>         
            </div>

            <div className="Acheter-Maintenant">
                
              <Bouton className='bouton bouton-home' 
                  handleClick={handlescroll} 
                  nameButton="Voir les nouveautés"               

              />
                
            </div>       
         
          </div>

      <TopVente/>
      <Nouveaute ref = {refNouv} />
      <Promotion />

    </div>
  )
}

export default Home
