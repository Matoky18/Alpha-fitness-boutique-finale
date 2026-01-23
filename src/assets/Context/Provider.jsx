import React from 'react'
import { ProduitContext } from './ProduitContext'
import { produits } from './DataProduit'


const DataProvider = ({children}) => {
  return (
    <ProduitContext.Provider value = {produits} >{children} </ProduitContext.Provider>
  )
}

export default DataProvider
