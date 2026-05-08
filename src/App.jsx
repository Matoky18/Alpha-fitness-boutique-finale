import { useRef } from 'react'
import './App.css'
import Blog from './components/blog/Blog'
import Home from './components/home/Home'
import Produit from './components/produit/Produit'
import {Route, BrowserRouter as Router,Routes , } from 'react-router-dom'
import Contact from './components/contact/Contact'
import Login from './components/login/Login'
import NavBar from './components/header/NavBar'
import DetailsProduit from './components/DetailsProduit/DetailsProduit'
import Categorie from './components/Categorie/Categorie'
import Cart from './components/Cart/Cart'
import Checkout from './components/commande/Checkout'
import PayerLivraison from './components/commande/PayerLivraison'
import MobileMoney from './components/commande/MobileMoney'
import Visa from './components/commande/Visa'
import Favoris from './components/favoris/Favoris'


function App() {
  
 

  const categorieTitre = ["Musculation","Cardio","Vêtement","Accessoire","Nutrition"];

  

  return (
           
        <Router>

           <NavBar />

           <Routes>

               <Route path='/' element={<Home />} />

               {categorieTitre.map((cat)=>
                                        
                    <Route key={cat} path={`/categorie/${cat}`} element={<Categorie categorie={cat} />} />
                              
               )}
                
               <Route key= 'panier' path= "/panier" element={<Cart/>} />
               <Route key= 'login' path= "login" element={<Login/>} />
               <Route path= "/produit/:id" element= {<DetailsProduit/>} />
               <Route key= 'Checkout' path='/commande' element ={<Checkout/>} />
               <Route key= 'PayerLivraison' path='/PayerLivraison' element ={<PayerLivraison/>} />
               <Route key= 'MobileMoney' path='/MobileMoney' element ={<MobileMoney/>} />
               <Route key= 'Visa' path='/Visa' element ={<Visa/>} />
               <Route key= 'Favoris' path='/Favoris' element ={<Favoris/>} />
               

            </Routes>
         
        </Router>
          
  )
}

export default App


