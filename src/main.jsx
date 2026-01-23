import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import DataProvider from './assets/Context/Provider.jsx'
import PanierProvider from './assets/Context/Panier/PanierProvider.jsx'
import FavorisProvider from './assets/Context/Favoris/FavorisProvider.jsx'

createRoot(document.getElementById('root')).render(

  

        <StrictMode>
        <PanierProvider>
          <DataProvider>
          <FavorisProvider>
          <App />
          </FavorisProvider>
        </DataProvider>
        </PanierProvider>
      </StrictMode>        

  


)
