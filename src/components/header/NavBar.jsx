import { faCartShopping,faMagnifyingGlass,faUser,faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './NavBar.css'
import React, { useContext, useState } from 'react'  
import logo from '../../assets/logo.png' 
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Input from '../Input/Input'
import Search from './search/Search'
import { ProduitContext } from '../../assets/Context/ProduitContext'
import Categorie from '../Categorie/Categorie'
import menu from "../../assets/icon/menuR.png"
import Resultats from './search/resultat/Resultats'
import x from "../../assets/icon/croixMobile.png"
import { PanierContext } from '../../assets/Context/Panier/PanierContext'


const NavBar = () => {

   const categorieTitre = ["Musculation","Cardio","Vêtement","Accessoire","Nutrition"];

   const [menuOuvert,setMenuOuvert] = useState(false);

   const {totalQuantite} = useContext(PanierContext);

   const handleClose = () => {
        setMenuOuvert(false);
   }

    const logoNav= [

       
        {name : 'chariot' , icon : faCartShopping , path: '/Panier' , display: 'block' },
        {name : 'inscrire' , icon : faUser , path: '/Login' ,display: 'none' },
        {name : 'favoris' , icon : faHeart , path: '/Favoris' , display: 'none' },
        
    ]

    const handleMenuMobile = () => {
        setMenuOuvert(!menuOuvert)
        document.body.style.overflow = !menuOuvert ? 'hidden' : 'auto';
    }
    const handleMenu = () => {
        setMenuOuvert(!menuOuvert)
        // document.body.style.overflow = !menuOuvert ? 'hidden' : 'auto';
    }
   

  return (

    <div className='navbar' >

        <img className='logo' src={logo} alt="" />

        <ul className= {`menu-mobile ${menuOuvert?'ouvert':'' }`} >

            <img onClick={()=> handleMenu()} className='x-Icon' src= {x} alt="" />

            <Link onClick={()=> handleMenu()} to ="/" className='accueil'>Accueil</Link>
            
            {categorieTitre.map((categorieTitre)=>
            
                <li  key={categorieTitre}  >
                    
                    <Link onClick={()=>handleClose()} className='item-nav' to={`/categorie/${categorieTitre}`} > {categorieTitre} </Link>
                
                </li>
            
            )}

        </ul>


        <div className='iconNav' >

            <Search className = {"searchBar-Nav"} searchContainer= "search-container" searchInput="searchInput" loupeSearch="loupeSearch" />

                {logoNav.map((iconItem)=>
                
                <Link key={iconItem.id} to={iconItem.path}  > 

                    <div className='iconNavItem' >
                        
                        <div className="icon-prodnumber">

                            <FontAwesomeIcon icon={iconItem.icon} /> 
                            
                            <div className="product-number" style={{display : `${iconItem.display}` }} > {totalQuantite > 0 && totalQuantite } </div>

                        </div>

                    </div>
                
                </Link>
                                            
                )}

        </div>
        

        <div  className="menu">

            <img onClick={()=> handleMenuMobile()} className='menu-Icon' src= {menu} alt="" />
        
        </div>


               
    </div>
  )
}

export default NavBar
