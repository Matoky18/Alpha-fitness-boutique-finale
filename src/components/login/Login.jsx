import React, { useState } from 'react'
import Input from '../Input/Input'
import Bouton from '../bouton/Bouton'
import  './Login.css'
import Checkbox from '../checkbox/Checkbox'
import googleIcon from "../../assets/icon/devicon_google.png";
import facebookIcon from "../../assets/icon/logos_facebook.png";
import instaLogo from "../../assets/icon/skill-icons_instagram.png";

const Login = () => {
    const [name,setName] = useState("")
    const [mdp,setMdp] = useState("")

    console.log(name)

    const loginIcon = [
      {name: "google", src : googleIcon},
      {name: "facebook", src : facebookIcon },
      {name: "instagram", src : instaLogo}
    ]

  return (
    <div className='login-container' >
        
        <div className='hero-login' >
            <h1>Connexion</h1>
            
            <div className="champ-hero">
              <div className="champ-login">
               
                  <Input className = ' inputText inputLogin' type="text" placeholder={"Nom"} value={name} onChange={(e)=>setName(e.target.value)} />
                  <Input className= ' inputText inputLogin' type="password" placeholder={"Mot de passe"} value={mdp} onChange={(e)=>setMdp(e.target.value)} />
                               
              </div>

              <Checkbox lableCheckbox="Rester connecté" />
                      
            </div>

            

            <div className="Champ-footer">
              <div className="ContinuerAvec">
                {loginIcon.map((f)=>{
                return <img src= {f.src}  alt="" className= {"imgIcon"} />
                })}
            </div>
              <Bouton className={"bouton bouton-login"} nameButton={"Se connecter"} />
              <p className='text mdpoublié' >Mot de passe oublié?</p>
            </div>
            
        </div>

               <p className="text signUp">Créer un compte</p>

       
    </div>
  )
}

export default Login
