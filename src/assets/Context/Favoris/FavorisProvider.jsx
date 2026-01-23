import React, {useState } from 'react'
import { FavorisContext } from './FavorisContext';
import unLikePhoto from "../../../assets/icon/like.png"
import likedPhoto from "../../../assets/icon/liked.png"



const FavorisProvider = ({children}) => {

    const [liked,setLiked] = useState([]);

    const handleLike = (panier) => {

        setLiked((prevClicked)=>{
            if (!prevClicked.some(p=>p.id===panier.id)) { //renvoie true si au moin un 
                                                    //element a le meme id mais !:false

                return [...prevClicked,panier]
            }
            else {
                const panierUp = prevClicked.filter(p=>p.id!==panier.id)
                return panierUp
            }
        })
        
    }


    const likePhoto = (panier) => {

        return liked.some(p=>p.id===panier.id)?likedPhoto : unLikePhoto

    }

    
    console.log(liked)

  return (
    <FavorisContext.Provider value={{handleLike,liked,likePhoto}} >
        {children}
    </FavorisContext.Provider>
  )
}

export default FavorisProvider


