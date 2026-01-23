import proteine1 from "../../assets/produit img/proteine1.png"
import proteine2 from "../../assets/produit img/proteine2.png"
import proteine3 from "../../assets/produit img/proteine3.png"
import new2 from "../../assets/produit img/new2.png"
import new3 from "../../assets/produit img/new3.png"
import Aletere from "../../assets/produit img/AltereReglable.png"
import produit1 from "../../assets/produit img/produit1.png"
import produit4 from "../../assets/produit img/new1.png"
import produit5 from "../../assets/produit img/produit5.png"
import produit6 from "../../assets/produit img/produit6.png"
import halt2 from "../../assets/produit img/halt2.png"
import halt21 from "../../assets/produit img/halt3.png"
import barrePompe from "../../assets/produit img/barrePompe.png"
import barrePompe2 from "../../assets/produit img/barrePompe2.png"
import gantphoto1 from "../../assets/produit img/gantphoto1.png"
import gantphoto2 from "../../assets/produit img/gantphoto2.png"
import gantphoto3 from "../../assets/produit img/gantphoto3.png"
import gantphoto4 from "../../assets/produit img/gantphoto4.png"
import debardeurhomme1 from "../../assets/produit img/debardeurbleu.png"
import casquettenoirehomme1 from "../../assets/produit img/casquettenoirehomme1.png"
import casquettenoirehomme from "../../assets/produit img/casquettenoirehomme.png"
import csqnoire1 from "../../assets/produit img/csqnoire1.png"
import csqnoiredos from "../../assets/produit img/csqnoiredos.png"
import csqnoireprof1 from "../../assets/produit img/csqnoireprof1.png"
import csqnoireprof2 from "../../assets/produit img/csqnoireprof2.png"



export const produits = [
        
        {id : "ha001" , categorie :"Musculation", produitNum : "produit1", produitName : "Haltères", imageProduit : Aletere , prix :"50" , details :"Ensemble d'haltères réglables ",promo :false , img : "" , img1 : ""},
        {id :"apmus001", categorie :"Musculation", produitNum : "produit2", produitName : "Apprareil musculation", imageProduit : new2 , prix :"250" , details :"Appareil complet pour musculation à domicile",promo :false , img : "" , img1 : ""},
        {id: "ha002", categorie : "Musculation",produitNum : "produit4" , produitName : "Halteres disque", imageProduit : halt2 , prix : "99" ,  details : "Ensemble d'haltères réglables" ,promo : true  , img : halt21 , img1 : halt2 },
        {id: "pubar001", categorie: "Musculation", produitNum: "produit5", produitName: "Barres de pompes", imageProduit: barrePompe, prix: "30", details: "Barres parallèles pour pompes, confortables pour les poignets", promo: true, img: barrePompe2 , img1: barrePompe },


        {id :"vet001", categorie :"Vêtement",produitNum : "produit1", produitName : "jogging", imageProduit : produit1 , prix :"10" , details :"Un jogging confortable et stylé",promo :false , img : "" , img1 : ""},
        {id :"sweat001", categorie :"Vêtement",produitNum : "produit2", produitName : "sweat", imageProduit : produit4 , prix :"40" , details :"Un sweat à capuche chaud",promo :false , img : "" , img1 : ""},
        {id :"short001", categorie :"Vêtement",produitNum : "produit3", produitName : "Short", imageProduit : produit5 , prix :"50" , details :"Une veste imperméable",promo :false , img :""  , img1 : ""},
        {id :"debar001", categorie :"Vêtement",produitNum : "produit4", produitName : "Débardeur", imageProduit : produit6 , prix :"60" , details :"Un accessoire tendance",promo :false , img : "" , img1 : ""},
        {id :"debar002", categorie :"Vêtement",produitNum : "produit5", produitName : "Débardeur", imageProduit : debardeurhomme1 , prix :"60" , details :"Un accessoire tendance",promo :false , img : "" , img1 : ""},




        {id:"gant001",categorie :"Accessoire",produitNum : "produit1", produitName : "Gants de musculation", imageProduit : gantphoto1 , prix :"20" , details :"Gants pour une meilleure prise en main",details2 : "protéger les mains contre les ampoules,améliorer la prise sur la barre,réduire la douleur pendant l’entraînement" ,promo :false , img1 : gantphoto2 , img : gantphoto3 , img2 : gantphoto4},
        {id :"gripo001", categorie :"Accessoire", produitNum : "produit3", produitName : "Gripo", imageProduit : new3 , prix :"25" , details :"Gant de musculation pour améliorer la prise",promo :false , img : "" , img1 : ""},
        {id :"cqt001", categorie :"Accessoire", produitNum : "produit4", produitName : "Casquette noire", imageProduit : casquettenoirehomme , prix :"25" , details :"Gant de musculation pour améliorer la prise" , details2 :"Casquette noire sport & lifestyle, pensée pour l’entraînement comme pour le quotidien 💪Son design sobre et moderne s’adapte facilement à toutes les tenues, en salle comme à l’extérieur 🖤" ,promo :false , img : csqnoire1 , img1 : csqnoiredos , img2 : csqnoireprof1 , img3 : csqnoireprof2},


        {id :"prot001",categorie :"Nutrition",produitNum : "produit1", produitName : "Proteine", imageProduit : proteine1 , prix :"10" , details :"Proteine  pour la récupération musculaire",promo :false , img : "" , img1 : ""},
        {id :"barprot001",categorie :"Nutrition",produitNum : "produit2", produitName : "Bar Proteine modifié", imageProduit : proteine2 , prix :"10" , details :" Bar Proteine pour une collation saine",promo :false , img : "" , img1 : ""},
        {id :"aminoc001",categorie :"Nutrition",produitNum : "produit3", produitName : "Amino Acides", imageProduit : proteine3 , prix :"15" , details :"améliorer la performance",promo :false , img : "" , img1 : ""},


]