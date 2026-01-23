import React, { useContext, useEffect, useState } from 'react'
import Input from '../../Input/Input'
import './Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { ProduitContext } from '../../../assets/Context/ProduitContext'
import Resultats from './resultat/Resultats'


const Search = ({className,searchContainer,searchInput,loupeSearch}) => {
  const produits = useContext(ProduitContext)

  const [value,setValue] = useState("")
  const [resultat,setResultat] = useState([])
  
    useEffect(()=>{

          if (value.trim() === "") {  //.trim() supprime les espaces en début et fin.
                                      //Si l’utilisateur tape juste des espaces, tu ne veux pas afficher tous les produits.
            setResultat([]);
            return;
        }


        const filtres = produits.filter(produit=>produit.produitName
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g,"")
        .includes(value.toLowerCase()
            .normalize("NFD").
            replace(/[\u0300-\u036f]/g,"")))
      
        setResultat(filtres)

    },[value])
   

   
  console.log(resultat)


  return (

      <div className={searchContainer} >

        

          <div className="recherche">
                      
              <Input type={"text"} value={value} onChange={(e) => setValue(e.target.value) } className= {searchInput} />
              <FontAwesomeIcon icon= {faMagnifyingGlass} className= {loupeSearch} />
      
          </div>

          <Resultats resultat={resultat} />

      </div>
    
  )
}

export default Search
