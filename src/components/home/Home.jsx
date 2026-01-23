import NavBar from "../header/NavBar";
import React from 'react'
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

  const handleClick = () => {

  }

  
  
  return (
    <div className="container-home" ref={refDiv}  >

      <Search className = {"searchBar-Nav-mobile"} searchContainer= "search-container-mobile" searchInput="searchInput-mobile" loupeSearch="loupeSearch-mobile" />  
         
       <div className='heroHome' >
          
          <h1>
            Atteignez vos objectifs sportifs avec
            le meilleur équipement !
          </h1>

          <h2>
            Livraison rapide, qualité 
            garantie et offres exclusives.
          </h2>

        <div className="Acheter-Maintenant">
            <p>Acheter maintenant</p>

              <Bouton className='bouton bouton-home' 
                  handleClick={handleClick} 
                  nameButton="Acheter maintenant" 
              />
              <Bouton className='bouton bouton-home-mobile' 
                  handleClick={handleClick} classNameIcon={"panier-Icon-Mobile"} icon={IconPanier} />
        </div>
          
         

       </div>

      <TopVente/>
      <Nouveaute />
      <Promotion />

    </div>
  )
}

export default Home
