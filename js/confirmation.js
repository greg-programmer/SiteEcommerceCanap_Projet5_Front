//*****************************************LA PAGE DE CONFIRMATION************************************************//

    //lecture du localStorage//
let addProduit = JSON.parse(localStorage.getItem("produit"));
//Si il y a un produit dans le localStorage//
if(addProduit != null){
        //****récupération de l'orderId pour l'afficher********//
        //Une variable pour récupérer l'orderId//
        const orderId = addProduit["orderId"];
        console.log(addProduit);
        //Affichage à l'écran du numéro de commande//
        document.querySelector("#orderId").innerHTML+=
        `${orderId}`
        //Suppression du local storage//
        localStorage.clear(orderId);  
        //Sinon renvoie moi à la page produit//         
      }else{
        window.location.href=`http://127.0.0.1:5500/front/html/index.html`;        
      }




