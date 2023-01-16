
//*****************************************LA PARTIE PANIER*************************************************//


//Lecture la clé//
let addProduit = JSON.parse(localStorage.getItem("produit"));
const panierDisplay = async() =>{
    console.log("salut");
    if(addProduit )
  {      
            //On attend que le produit soit ajouté et on execute ce code// 
            await addProduit;   
            for(let i =0;  i< addProduit.length; i++){
              document.querySelector("#cart__items ").innerHTML +=        
                `<article class="cart__item" data-id="${addProduit[i]["id"]}" data-color="${addProduit[i]["colors"]}">
            <div class="cart__item__img">
              <img src="${addProduit[i]["imageUrl"]}" alt="${addProduit[i]["altTxt"]}">
            </div>
            <div class="cart__item__content">
              <div class="cart__item__content__description">
                <h2>${addProduit[i]["name"]}</h2>
                <p>${addProduit[i]["colors"]}</p>
                <p>${addProduit[i]["price"] * 1 * addProduit[i]["quantity"] *1}€</p>
              </div>
              <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                  <p>Qté : </p>
                  <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100"
                  value="${addProduit[i].quantity * 1}">
                </div>
                <div class="cart__item__content__settings__delete">
                      <p class="deleteItem" data-deleteItem = "button">Supprimer</p>
                </div>
              </div>
            </div>
          </article> ` 
          //-----------------------------Mise à jours de la quantité en direct sur la page panier------//
          let oneCart = document.querySelectorAll(".cart__item");
            console.log(oneCart); 
              for (let h = 0; h < oneCart.length; h++)
                  {
                      oneCart[h].addEventListener("change",(e)=>{                  
                      let value = parseInt(e.target.value);                
                      console.log(value);           
                      console.log(addProduit[h]);
                      parseInt(addProduit[h]["quantity"]);
                      // value = parseInt(e.target.value);                             
                      //--mise à jours des quantités en direct avec change et event.target.value--//           
                      //return la value en direct//     
                      addProduit[h].quantity = value,        
                      //met à jours le prix et la quantité// 
                      addProduit[h].price * 1 * value,
                      localStorage.setItem("produit",JSON.stringify(addProduit));
                      valueTableau = JSON.parse(localStorage.getItem("produit"));  
                      //Suppression du produit si la quantité est sur 0//  
                      //Si le panier à plus de 1 article, alors tu supprimes l'article selectionné // 
                 if(addProduit.length > 1)
                 {
                        zeroProduct = addProduit.filter(product => product["quantity"] != 0),          
                        localStorage.setItem("produit",JSON.stringify(zeroProduct)),
                        console.log(zeroProduct),
                        console.log(zeroProduct)    
                      //sinon si il reste plus q'un seul article alors...// 
                      //..on utilise la méthode clear pour éviter d'avoir un tableau vide en retour dans le localStorage //  
                  }  
                  else if (addProduit.length == 1 && value == 0)
                  {
                        console.log("0");
                        localStorage.clear(addProduit);            
                  } 
                  //La page se recharge pour mettre à jours les informations du panier//       
                  location.reload();                        
                })        
              }       
          }  
 }
 else{
     console.log("pas d'article ajouté")
}  
 //----------------Supprimer le panier--------------------------////   
 //--------Avec le boutton supprimer-----------///
function deleteBasket(){   
  if(addProduit != null){
               for (let d = 0; d < addProduit.length; d++)
               {   
                //Si le nombre d'article est supérieur à 1 //
                    if(addProduit.length > 1 )
                          {
                            let buttonDelete = document.querySelectorAll(".deleteItem");    
                          //--------Filter pour comparer les id-----------//
                          ///faire condition si il y a un article supprimer le localStorage faire clear()//
                          //-----Si l'ID et la couleur du produit est différents de l'Id et la couleur du produit dans le panier ...//
                          //...alors supprime le tableau.
                          let newProduct = addProduit.filter(product => product["id"] && product["colors"]
                          != addProduit[d]["colors"]) ;                     
                          buttonDelete[d].addEventListener("click",(e)=>
                                {            
                                  localStorage.setItem("produit",JSON.stringify(newProduct)),
                                  newProduct = JSON.parse(localStorage.getItem("produit")), 
                                  delete addProduit[d];        
                                  location.reload();                       
                                  // console.log(addProduit.splice(d)),   
                                  console.log("Supprimé")         
                                  // location.reload()        
                                })               
                          }
            else{       
            let buttonDelete = document.querySelectorAll(".deleteItem");    
                //------Sinon vide moi le local storage----------//
                buttonDelete[d].addEventListener("click",(e)=>{      
                localStorage.clear(addProduit);        
                location.reload();                       
                  // console.log(addProduit.splice(d)),   
                  console.log("Supprimé")         
                  // location.reload()        
                  })
            }    ///-----------avec la quantité qui est à 0------------------//
              
        }  
  }  
 else{
     console.log("Aucun produit");
 } 
} 
   deleteBasket();   
    }    
panierDisplay();

//---------------Modification des quantités du panier----------------------//
//---------------Utilisez la boucle for pour additionner un tableau dans un tableau JavaScript-------//////////
//-----affichage du prix total-----///
function sommeTotal(){  
      if(addProduit != null){   
        let sum = 0;
            for (let i = 0; i < addProduit.length; i++) {           
                  sum += addProduit[i]["price"] * addProduit[i]["quantity"]*1;    
                  console.log(sum);                
              }
              document.querySelector("#totalPrice").innerHTML += 
              `${sum}`  
      }
      else {
          console.log("panier vide");
      }
} 
sommeTotal();
 //-----affichage de la quantité total-----///
  //--conversion en nombre pour la somme de la quantité/ 
function totalQuantity(){
      if(addProduit != null)
      {
            let sum2 = 0;
            for (let i = 0; i < addProduit.length; i++)
                {          
                  sum2 += parseInt(addProduit[i]["quantity"]);        
                }
            console.log(sum2);        
            document.querySelector("#totalQuantity").innerHTML += 
            `${sum2}`  
      }
      else{
        console.log("panier vide");
      }  
   }
    totalQuantity();
  let updateQuantity = document.querySelector("#cart__items"); 
  

   
//******************************************LA PARTIE FORMULAIRE*******************************************************************//

function formValidation(){
  //Vérifier si il y a un produit dans le panier//
  if(addProduit != null){ 
          //Pas de number et caractère spécial//    
          let form = document.querySelector(".cart__order__form");
          //Mise en place un d'évent pour éviter le type number//  
          form.firstName.addEventListener("change", function(){
            //on  créé une fonction pour valider le firstName et on met this car c'est cette élément...// 
            //qui est en train d'être écouté(firstName) donc sa va passe le form.firstName dans la fonction...//
            // qu'on va créer en dessous.//
            validFirstName(this);    
          });
          //*************La partie firstName*******************************// 
        //prenventDeauflt pour éviter que la soumission soit envoyé directement au serveur car on souhaite vérifier les donnés avant//    
        //firstName//
              form.addEventListener('submit', function(e){ 
              e.preventDefault();  
              //Est ce que ma fonction validFirstName me renvoie true ou false?//
                    if(validFirstName(form.firstName)){
                          let contact = {
                            firstName: form.firstName.value,     
                          }  
                      console.log(contact);
                    }    
                        else{
                          console.log("prénom non valide");
                        }  
              });

          //firstName//
          const validFirstName = function(inputFirstName){
            //^ le symbole signifie debut de la regExp ,...///
            //[a-zA-Z] cela signifie que la regExp accepte seulement le a jusqu'au z minuscule et le A jusqu'au Z majuscule.. //    
          let firstNameRegExp = new RegExp('^[a-zA-Z,éè]+$','g')   
          let testFirstName = firstNameRegExp.test(inputFirstName.value); 
                if(testFirstName){     
                  const errorMessageFirstName = document.querySelector("#firstNameErrorMsg");
                  errorMessageFirstName.innerHTML =""; 
                  return true;   
                }
                else{
                      errorMessageFirstName = document.querySelector("#firstNameErrorMsg");
                      errorMessageFirstName.innerHTML ="Désolé mais ce champs comporte une erreur";    
                      return false;
                }
          }; 

        //*************La partie lastName*******************************//

          // on récupère le lastName//
          form.lastName.addEventListener("change", function(){
            //on  créé une fonction pour valider le lastName et on met this car c'est cette élément...// 
            //qui est en train d'être écouté(lastName) donc sa va passe le form.lastName dans la fonction...//
            // qu'on va créer en dessous.//
            validLastName(this);    
          });
          //Création de l'objet contact récupéré dans le back//
          let contact = {};
          console.log(contact);  
          //prenventDeauflt pour éviter que la soumission soit envoyé directement au serveur car on souhaite vérifier les donnés avant//    
        //lastName//
        form.addEventListener('submit', function(e){         
              e.preventDefault();      
            //Est ce que ma fonction validFirstName me renvoie true ou false?//
              if(validLastName(form.lastName)){
                let contact = {
                  firstName: form.firstName.value,
                  lastName: form.lastName.value,
                }
                console.log(contact);
              }    
              else{
                console.log("nom non valide");
              }  
        });
          //firstNameControl//
          const validLastName = function(inputLastName){
            //^ le symbole signifie debut de la regExp ,...///
            //[a-zA-Z] cela signifie que la regExp accepte seulement le a jusqu'au z minuscule et le A jusqu'au Z majuscule.. //    
          LastNameRegExp = new RegExp('^[a-zA-Z,éè]+$','g')   
          let testLastName = LastNameRegExp.test(inputLastName.value); 
          if(testLastName){     
            const errorMessageLastName = document.querySelector("#lastNameErrorMsg");
            errorMessageLastName.innerHTML ="";    
            return true;
          }
          else{
                errorMessageLastName = document.querySelector("#lastNameErrorMsg");
                errorMessageLastName.innerHTML ="Désolé mais ce champs comporte une erreur";
                return false;    
          }    
          }; 

        //**************La partie address****************************//

          // on récupère le l'adresse//
          form.address.addEventListener("change", function(){
            //on  créé une fonction pour valider l'addresse et on met this car c'est cette élément...// 
            //qui est en train d'être écouté(address) donc sa va passe le form.address dans la fonction...//
            // qu'on va créer en dessous.//
          validAddress(this);
          });
          //prenventDeauflt pour éviter que la soumission soit envoyé directement au serveur car on souhaite vérifier les donnés avant//    
        //adress//
        form.addEventListener('submit', function(e){     
              e.preventDefault();      
            //Est ce que ma fonction validFirstName me renvoie true ou false?//
              if(validAddress(form.address)){
                  contact = {
                    firstName: form.firstName.value,
                    lastName: form.lastName.value,
                    address: form.address.value,        
                  }    
                  console.log(contact);      
              }      
              else{
                console.log("addresse non valide");
              }  
        });
          const validAddress = function(inputAddress){
            //^ le symbole signifie debut de la regExp ,...///
            //Pas restriction pour l'addresse (trop vaste) //    
          if(inputAddress.value){     
            const errorMessageAddress = document.querySelector("#addressErrorMsg");
            errorMessageAddress.innerHTML ="";    
            return true;
          }
          else{
                errorMessageAddress = document.querySelector("#addressErrorMsg");
                errorMessageAddress.innerHTML ="Adresse non valide";
                return false;    
          }  
          }; 

          //**************La partie city****************************//

          // on récupère la ville//
          form.city.addEventListener("change", function(){
            //on  créé une fonction pour valider la ville et on met this car c'est cette élément...// 
            //qui est en train d'être écouté(cityName) donc sa va passe le form.cityName dans la fonction...//
            // qu'on va créer en dessous.//
          validCity(this);
          });
          //prenventDeauflt pour éviter que la soumission soit envoyé directement au serveur car on souhaite vérifier les donnés avant//    
        //adress//
        form.addEventListener('submit', function(e){     
          e.preventDefault(); 
        //Est ce que ma fonction validFirstName me renvoie true ou false?//
          if(validCity(form.city)){
            contact = {
              firstName: form.firstName.value,
              lastName: form.lastName.value,
              address: form.address.value,
              city: form.city.value,     
              };
            console.log(contact);
          }    
          else{
            console.log("city non valide");
          }  
        });
          const validCity = function(inputCity){  
          cityRegExp = new RegExp('^[a-zA-Z,éè]+$','g')
          let testCity = cityRegExp.test(inputCity.value); 
          if(testCity){     
            const errorMessageAddress = document.querySelector("#cityErrorMsg");
            errorMessageAddress.innerHTML ="";    
            return true;
          }
          else{
                errorMessageAddress = document.querySelector("#cityErrorMsg");
                errorMessageAddress.innerHTML ="La ville n'est pas valide";   
                return false; 
          }  
          }; 

          //**************La partie email****************************//

          // on récupère l'email//
          form.email.addEventListener("change", function(){
            //on  créé une fonction pour valider l'email et on met this car c'est cette élément...// 
            //qui est en train d'être écouté(email) donc sa va passe le form.email dans la fonction...//
            // qu'on va créer en dessous.//
          validEmail(this);
          });  
        //adress//
        form.addEventListener('submit', function(e){  
          //prenventDeauflt pour éviter que la soumission soit envoyé directement au serveur car on souhaite vérifier les donnés avant//         
              e.preventDefault();     
            //Est ce que ma fonction validFirstName me renvoie true ou false?//
                        let products = [] ; 
                      if(validFirstName(form.firstName)&&
                        validLastName(form.lastName)&&
                        validCity(form.city)&& 
                        validEmail(form.email) &&
                        validAddress(form.address)&& products != [] || null){    
                              //l'objet contact est créé entièrement//
                        ////////gérer le format string///
                        let contact = {
                          firstName: form.firstName.value,
                          lastName: form.lastName.value,
                          address: form.address.value,
                          city: form.city.value,
                          email: form.email.value          
                          };                                   
                      //**********Conversion de la quantité et du prix en string pour l'envoie au serveur aprés la validation final**************//
                      for (let i = 0; i < addProduit.length; i++)
                        
                      { 
                          console.log(addProduit[i]["quantity"] = addProduit[i]["quantity"].toString()); 
                          console.log(addProduit[i]["price"] = addProduit[i]["price"].toString());   
                          localStorage.setItem("produit",JSON.stringify(addProduit)),
                          JSON.parse(localStorage.getItem("produit")), 
                          console.log(addProduit);
                          
                          products.push(addProduit[i]["id"]);
                          console.log(products);   
                      }  
                          
                          
                          //modification du nom de la variable pour le back-end// 
                          
                          
                    //--------------Validation final----------------------//
                    let finalValidation = {
                      contact,
                      products
                            } 
                        console.log(finalValidation);  
                        console.log("c'est ok tu peux passer");
                        const promise01 = fetch("http://localhost:3000/api/products/order", {
                          method: "POST",
                          headers: { 
                          'Accept': 'application/json', 
                          'Content-Type': 'application/json' 
                        },
                            body: JSON.stringify(finalValidation)
                        });
                      {  
                        promise01.then(async (response)=> {
                        try{
                            console.log(response);
                            const orderId =await response.json()
                            console.log(orderId);
                            localStorage.setItem("produit",JSON.stringify(orderId));  
                            let IdFinal = orderId["orderId"];
                            console.log(IdFinal);                                   
                            //le local storage est vidé aprés 5 secondes//
                            console.log(document.querySelector("#order"));                  
                            const url = window.location.href=`http://127.0.0.1:5500/front/html/confirmation.html`;                                                         
                      } 
                      catch (e)
                      {
                            console.log(e);
                      } 
                })               
              }   
            }     
        });
              const validEmail = function(inputEmail){  
              emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'); 
              let testEmail =emailRegExp.test(inputEmail.value); 
                    if(testEmail){     
                          const errorMessageEmail = document.querySelector("#emailErrorMsg");
                          errorMessageEmail.innerHTML ="";    
                          return true;
                              }
                    else{
                          errorMessageEmail = document.querySelector("#emailErrorMsg");
                          errorMessageEmail.innerHTML ="Adresse email non valide"; 
                          return false;   
                      }                          
                };             
         }
  else{
        console.log("panier vide")
   }
}
  
formValidation();



