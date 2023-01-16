
//----------------LA PARTIE AFFICHAGE DU PRODUIT SELECTIONNE-----------------//  
//Récupération de l'id pour le mettre dans une variable // 
const queryString_Url_iD = window.location.search;
const urlSearchParams = new URLSearchParams(queryString_Url_iD);
const id = urlSearchParams.get("id");
 //Utilisation de la méthode fetch pour récupérer les données de l'API //      
 fetch(`http://localhost:3000/api/products/${id}`)
 //Conversion du format en json pour avoir accéder au tableau//
 .then(data2 => data2.json())
 //Récupération des données du tableau pour pouvoir les afficher//
 .then(Data2_json =>{
 //récupération des éléments Data2_json//
 //image et texte alt//
  Data2_json_img = Data2_json.imageUrl;
  document.querySelector('.item__img').innerHTML +=
 `<img src="${Data2_json.imageUrl}"
   alt="${Data2_json.altTxt}">`     
  document.querySelector('#title').innerHTML +=
   //Du nom//  
  `${Data2_json.name}` 
  document.querySelector("#price").innerHTML +=
  //Du prix//
  `${Data2_json.price}`
  document.querySelector("#description").innerHTML +=
  //De la description//
  `${Data2_json.description}`
  //Avec une boucle for j'ai récupéré toute les couleurs//
  for(Data2_json_colors of Data2_json.colors)
      {         
          document.querySelector('#colors').innerHTML +=`
          <option value="${Data2_json_colors}">${Data2_json_colors}</option>`
      }
  //Le choix des couleurs pour le client//
   let inputColors = document.getElementById("colors");  
   inputColorsValue = inputColors.value;    

  //--Selection des produits pour le panier--///
  let bouton = document.querySelector("#addToCart");  
  const addBasket = () =>{
       console.log(bouton);
       bouton.addEventListener("click", ()=>{
          //Le choix du nombre de produit//
        let inputNumber =document.querySelector("input").value;
        let inputNumberString = parseInt(inputNumber);
      //Le produit// 
      let produit = {
        colors:inputColorsValue ,
        id :id,
        name: Data2_json.name,
        price:Data2_json.price,
        imageUrl:Data2_json.imageUrl,
        quantity : inputNumberString ,
        altTxt : Data2_json.altTxt
      };    
         produitTableau = JSON.parse(localStorage.getItem("produit"));
         let select = document.getElementById("colors");
         console.log(select.value);
         console.log(produitTableau);
       //L'objet produit est cloné et il récupère les values colors et quantity// 
       const fusionProduitCouleur = Object.assign({},produit,{         
       colors:`${select.value}`, 
       quantity:`${inputNumberString}`
           
       });    
       console.log(fusionProduitCouleur);         
       //---------------Veuillez choisir une couleur et une quantité-----------------------------///////
        if(fusionProduitCouleur.colors != "" && produit.quantity > 0 && produit.quantity < 101 ){                
        //Si il n ' y a pas de panier dans le local storage alors créé un tableau et pousse moi un produit//         
                    if(produitTableau == null){
                      alert("le produit a été ajouté")
                      produitTableau =[];
                      produitTableau.push(fusionProduitCouleur);
                      console.log(produitTableau);
                      localStorage.setItem("produit",JSON.stringify(produitTableau));
                    }    
         //Si il y a un produit dans le panier qui a un id identique  et une couleure identique à celui
          // que l'utilisateur a sélectionne alors       
                    else if(produitTableau != null)
                    {
                      for (i=0; i <produitTableau.length; i++)
                      {
                         console.log("test");   
                         if(produitTableau[i].id == produit.id &&
                           produitTableau[i].colors == select.value && produitTableau[i].quantity){

                              return(
                               alert ("La quantité a été ajouté "), 
                               console.log(produitTableau[i].quantity  = produitTableau[i].quantity * 1 + fusionProduitCouleur.quantity * 1),                  
                               console.log("quantite++"),
                               localStorage.setItem("produit",JSON.stringify(produitTableau)),
                               produitTableau = JSON.parse(localStorage.getItem("produit"))
                             )
                           }                       
                        } 
                      for (i=0; i <produitTableau.length; i++){
                        if(produitTableau[i].id == produit.id && 
                         produitTableau[i].colors != select.value || produitTableau[i].id != produit.id){
                           alert("Un article a été ajouté")
                           return (console.log("nouveau"),
                           produitTableau.push(fusionProduitCouleur),                                 
                           localStorage.setItem("produit",JSON.stringify(produitTableau)),
                           produitTableau =JSON.parse(localStorage.getItem("produit")))
                         }     
                 }
             }           
        }        
        else{ 
            alert ("Désolé mais le champs de selection comporte une erreur: quantité, couleur ou limite de stock!")            
        }     
    })
  }
  addBasket();
  }).catch (()=>{
  //Une variable pour afficher l'erreur//
        document.querySelector("#title").innerHTML +=
 `Erreur 404 `      
  })  
 ;    



































 /////---------------Affichage de la quantité total---------------------///  

//  let produitLocal = JSON.parse(localStorage.getItem("produit"))

//  let produitTotalQuantity = [];
//  console.log(produitLocal);

//  if(produitLocal){
//    produitLocal.forEach((index)=>{
//       produitTotalQuantity.push(index.quantity)
//       console.log(produitTotalQuantity);
//    })   
//  }


  
  
  



