import React, { useEffect, useState } from 'react'
import { PanierContext } from './PanierContext'



const PanierProvider = ({children}) => {

  const [totalQuantite,setTotalQuantite] = useState(0)
  const [prixTotal,setPrixTotal] = useState(0)

  const [panier,setPanier] = useState([])

  const ajouterPanier = (produit) => {

      if (panier.find((prod)=>prod.produitName===produit.produitName)) {

        setPanier(panier.map((p)=>

          p.produitName===produit.produitName?{...p , quantite : p.quantite+1} : p

        ))
      }
          
      
      else {
        setPanier([...panier,{...produit,quantite : 1}])
      }      
  }

  const zeroProduit = (produit)=> {
      if(panier.find(prod=>prod.produitName===produit.produitName)){
          setPanier(panier.map(p=>
            p.produitName===produit.produitName?{...p,quantite : 0 } : p
          ).filter(prod=>prod.quantite>0))
      }
  }

  const supprimerProduit = (produit)=>{

      if (panier.find(prod=>prod.produitName===produit.produitName)) {

          setPanier(panier.map((p)=>
             
            p.produitName===produit.produitName?{...p,quantite : p.quantite-1} : p 

          ).filter((prod)=>prod.quantite>0)) 
      } 
     
  }



  const prixTotalUnProduit = panier.map(p=>p.prix*p.quantite) 

  let total = 0
  useEffect(()=>{
    
    for (let index = 0; index < prixTotalUnProduit.length; index++) {

    total = total + prixTotalUnProduit[index]
    
  }

    setPrixTotal(total)
  },[panier])

  
  let totalquantite = 0

  useEffect(()=>{
    for (let index = 0; index < panier.length; index++) {
      totalquantite = totalquantite + panier[index].quantite
    }
    setTotalQuantite(totalquantite)
  },[panier])




  return (

      <PanierContext.Provider value={{totalQuantite,ajouterPanier,panier,prixTotal,supprimerProduit,zeroProduit}}>

           {children}

      </PanierContext.Provider>

  )}

export default PanierProvider
