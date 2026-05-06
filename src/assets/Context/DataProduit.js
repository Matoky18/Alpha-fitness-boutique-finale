import proteine1 from "../../assets/produit img/proteine1.png"
import proteine2 from "../../assets/produit img/proteine2.png"
import proteine3 from "../../assets/produit img/proteine3.png"
import new2 from "../../assets/produit img/new2.png"
import gripofondblanc from "../../assets/produit img/gripofondblanc.png"
import Aletere from "../../assets/produit img/AltereReglable.png"
import produit1 from "../../assets/produit img/produit1.png"
import produit4 from "../../assets/produit img/new1.png"
import produit5 from "../../assets/produit img/produit5.png"
import produit6 from "../../assets/produit img/produit6.png"
import halt2 from "../../assets/produit img/halt2.png"
import halt21 from "../../assets/produit img/halt3.png"
import haltfondblanc from "../../assets/produit img/haltfondblanc.png"
import barrePompe from "../../assets/produit img/barrePompe.png"
import barrePompe2 from "../../assets/produit img/barrePompe2.png"
import gantphoto1 from "../../assets/produit img/gantphoto1.png"
import gantphoto2 from "../../assets/produit img/gantphoto2.png"
import gantphoto3 from "../../assets/produit img/gantphoto3.png"
import gantphoto4 from "../../assets/produit img/gantphoto4.png"
import debardeurhomme1 from "../../assets/produit img/debardeurbleu.png"
import debbleu2 from "../produit img/debbleu2.png"
import casquettenoirehomme from "../../assets/produit img/casquettenoirehomme.png"
import csqnoire1 from "../../assets/produit img/csqnoire1.png"
import csqnoiredos from "../../assets/produit img/csqnoiredos.png"
import csqnoireprof1 from "../../assets/produit img/csqnoireprof1.png"
import csqnoireprof2 from "../../assets/produit img/csqnoireprof2.png"
import velotEllipt from "../../assets/produit img/velotelliptique.png"
import velospinning from "../../assets/produit img/velospinning.png"
import cordeasauter from "../../assets/produit img/cordeasauter.png"
import tapisdecourse from "../../assets/produit img/tapisdecourse.png"
import rameur from "../../assets/produit img/rameur.png"
import stepper from "../../assets/produit img/stepper.png"
import ensemblejoggingfb from "../../assets/produit img/ensemblejoggingfb.png"
import joggingsolofb from "../../assets/produit img/joggingsolofb.png"
import sweetfb from "../../assets/produit img/sweetfb.png"
import joggingfb from "../../assets/produit img/joggingfb.png"
import jogging01 from "../../assets/produit img/jogging01.png"
import jogging03 from "../../assets/produit img/jogging03.png"
import dosproduit5 from "../../assets/produit img/dosproduit5.png"
import sac0 from "../../assets/produit img/sac0.png"
import sac1 from "../../assets/produit img/sac1.png"
import sac2 from "../../assets/produit img/sac2.png"
import gourdephoto1 from "../../assets/produit img/gourdephoto1.png"
import appareilmusculationphoto1 from "../../assets/produit img/appareilmusculationphoto1.png"
import susptrphoto0 from "../../assets/produit img/susptrphoto0.png"
import tapisphoto01 from "../../assets/produit img/tapisphoto01.png"





export const produits = [
        
        {id : "ha001" , categorie :"Musculation", produitNum : "produit1", produitName : "Haltères", imageProduit : Aletere , prix :"50" , details :"Ensemble d'haltères réglables ",promo :false , img : "" , img1 : ""},
        {id :"apmus001", categorie :"Musculation", produitNum : "produit2", produitName : "Apprareil musculation", imageProduit : new2 , prix :"250" , details :"Appareil complet pour musculation à domicile",promo :false , img : "" , img1 : ""},
        {id:"ha002", categorie : "Musculation",produitNum : "produit4" , produitName : "Halteres disque", imageProduit : haltfondblanc , prix : "99" ,  details : "Ensemble d'haltères réglables" ,promo : true  , img : halt21 , img1 : halt2 },
        {id:"pubar001", categorie: "Musculation", produitNum: "produit5", produitName: "Barres de pompes", imageProduit: barrePompe, prix: "30", details: "Barres parallèles pour pompes, confortables pour les poignets", promo: true, img: barrePompe2 , img1: barrePompe },
        {id:"apmus002",categorie:"Musculation",produitNum:"produit6",produitName:"Appareil de musculation mural",imageProduit:appareilmusculationphoto1,prix:"250",details:"Station murale pour tractions, dips et abdominaux",details2:"structure métallique robuste,poignées rembourrées pour le confort,permet de travailler le haut du corps efficacement,idéal pour un usage à domicile",promo:false,img1: "",img:"",img2:""},
        {id:"susptr001",categorie:"Musculation",produitNum:"produit7",produitName:"Sangles de suspension",imageProduit: susptrphoto0 ,prix:"120",details:"Sangles de suspension pour entraînement fonctionnel",details2:"permet de travailler au poids du corps,renforce le gainage et la stabilité,adapté à tous niveaux,compact et facile à installer à domicile",promo:false,img1:"",img:"",img2:""},















        {id:"vel001",categorie :"Cardio", produitNum : "produit1", produitName : "Vellot Eliptique", imageProduit : velotEllipt , prix :"650" , details :"Appareil cardio complet, fluide, sans impact articulaire" ,promo :false , img : "" , img1 : ""},
        {id:"vesp002",categorie :"Cardio", produitNum : "produit2", produitName : "Vélo Spinning", imageProduit : velospinning , prix :"250" , details :"Vélo de spinning pour un entraînement intensif à domicile" ,promo :false , img : "" , img1 : ""},
        {id:"cord001",categorie :"Cardio",produitNum : "produit3", produitName : "Corde à sauter", imageProduit : cordeasauter , prix :"15" , details :"Corde à sauter pour un entraînement cardio efficace et amusant" ,promo :false , img : "" , img1 : ""},
        {id:"tapi001",categorie :"Cardio",produitNum : "produit4", produitName : "Tapis de course", imageProduit : tapisdecourse , prix :"800" , details :"Tapis de course pour un entraînement cardio complet à domicile" ,promo :false , img : "" , img1 : ""},
        {id:"rame001",categorie :"Cardio",produitNum : "produit5", produitName : "Rameur", imageProduit : rameur , prix :"500" , details :"Rameur pour un entraînement cardio complet et efficace à domicile" ,promo :false , img : "" , img1 : ""},
        {id:"step001",categorie :"Cardio",produitNum : "produit6", produitName : "Stepper", imageProduit : stepper , prix :"300" , details :"Stepper pour un entraînement cardio efficace et ciblé sur les jambes à domicile" ,promo :false , img : "" , img1 : ""},



        {id :"vet001", categorie :"Vêtement",produitNum : "produit1", produitName : "Jogging", imageProduit : joggingsolofb , prix :"10" , details :"Un jogging confortable et stylé", details2 : "Pantalon en tissu doux et extensible offrant liberté de mouvement, maintien optimal et évacuation de la transpiration, idéal pour entraînement et usage quotidien",promo :false , img : jogging01 , img1 : jogging03},       
        {id :"sweat001", categorie :"Vêtement",produitNum : "produit2", produitName : "Ensemble jogging", imageProduit : ensemblejoggingfb , prix :"75" , details :"Ensemble jogging respirant confortable pour sport et quotidien",details2 :"Sweat  pantalon extensibles, confortables et respirants, parfaits pour sport et usage quotidien",promo :false , img : sweetfb , img1 : joggingfb},
        {id :"short001", categorie :"Vêtement",produitNum : "produit3", produitName : "Short", imageProduit : produit5 , prix :"50" , details :"Une veste imperméable",promo :false , img : dosproduit5  , img1 : ""},
        {id :"debar001", categorie :"Vêtement",produitNum : "produit4", produitName : "Débardeur", imageProduit : produit6 , prix :"60" , details :"Un accessoire tendance",promo :false , img : "" , img1 : ""},
        {id :"debar002", categorie :"Vêtement",produitNum : "produit5", produitName : "Débardeur", imageProduit : debbleu2 , prix :"60" , details :"Un accessoire tendance",promo :false , img : "" , img1 : ""},


        {id:"gant001",categorie :"Accessoire",produitNum : "produit1", produitName : "Gants de musculation", imageProduit : gantphoto2 , prix :"20" , details :"Gants pour une meilleure prise en main",details2 : "protéger les mains contre les ampoules,améliorer la prise sur la barre,réduire la douleur pendant l’entraînement" ,promo :false , img1 : gantphoto1 , img : gantphoto3 , img2 : gantphoto4},
        {id :"gripo001", categorie :"Accessoire", produitNum : "produit2", produitName : "Gripo", imageProduit : gripofondblanc , prix :"25" , details :"Gant de musculation pour améliorer la prise",promo :false , img : "" , img1 : ""},
        {id :"cqt001", categorie :"Accessoire", produitNum : "produit3", produitName : "Casquette noire", imageProduit : csqnoireprof1 , prix :"25" , details :"Gant de musculation pour améliorer la prise" , details2 :"Casquette noire sport & lifestyle, pensée pour l’entraînement comme pour le quotidien Son design sobre et moderne s’adapte facilement à toutes les tenues, en salle comme à l’extérieur 🖤" ,promo :false , img : csqnoire1 , img1 : csqnoiredos , img2 : casquettenoirehomme , img3 : csqnoireprof2},
        {id :"sac001", categorie :"Accessoire",produitNum : "produit4", produitName : "Sac de sport", imageProduit : sac1 , prix :"40" , details :"Un sac de sport spacieux et pratique pour transporter vos affaires de sport",promo :false , img : sac0 , img1 : sac2},
        {id:"gourde001",categorie :"Accessoire",produitNum : "produit5",produitName : "Gourde de sport",imageProduit : gourdephoto1,prix :"15",details :"Gourde pratique pour rester hydraté pendant l'entraînement",details2 : "facile à transporter,permet une hydratation rapide,conçue pour un usage sportif,résistante et réutilisable",promo :false,img1 : "" ,img : "",img2 : ""},
        {id:"tapis001",categorie:"Accessoire",produitNum:"produit6",produitName:"Tapis de sport",imageProduit: tapisphoto01 ,prix:"40",details:"Tapis de sport antidérapant pour vos séances de fitness ou yoga",details2:"surface texturée pour une meilleure adhérence,facile à nettoyer et à transporter,offre confort et stabilité pendant l’entraînement,idéal pour le renforcement musculaire et la relaxation",promo:false,img1:"",img:"",img2:""},





        {id :"prot001",categorie :"Nutrition",produitNum : "produit1", produitName : "Proteine", imageProduit : proteine1 , prix :"10" , details :"Proteine  pour la récupération musculaire",promo :false , img : "" , img1 : ""},
        {id :"barprot001",categorie :"Nutrition",produitNum : "produit2", produitName : "Bar Proteine modifié", imageProduit : proteine2 , prix :"10" , details :" Bar Proteine pour une collation saine",promo :false , img : "" , img1 : ""},
        {id :"aminoc001",categorie :"Nutrition",produitNum : "produit3", produitName : "Amino Acides", imageProduit : proteine3 , prix :"15" , details :"améliorer la performance",promo :false , img : "proteine3dos" , img1 : "proteine3dos"},


]

