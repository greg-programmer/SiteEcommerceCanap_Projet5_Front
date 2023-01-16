
//Gére l'affichage et les interactions de la page d'accueil//
////Création d'une classe article qu'on utilisera pour mettre les objets//
class Article{

  constructor(jsonArticles){
      
      jsonArticles && Object.assign(this,jsonArticles);//Une grande boîte vide qui est rangé et qu'on utilisera pour la fin//      
  }             
}; 
//Récupération de l'api avec fetch//        
fetch("http://localhost:3000/api/products")
//Conversion au format json//
.then(data => data.json())
.then(jsonListArticle =>{
      //Un boucle pour récupérer les articles et ensuite ils sont stockés dans la variable jasonArticles//
     for(let jsonArticles of jsonListArticle){        
     // on fait apel à cette grande boîte pour récupérer tous les articles// 
         let article = new Article(jsonArticles) 
         console.log(jsonListArticle); 
         //récupération des id//     
         var id = jsonArticles["_id"];         
         //Affichage de la page dynamiquement avec .innerHTML//
        var test =  document.querySelector("#items").innerHTML += 
         `<a href="./product.html?id=${id}">          
         <article>
           <img src="${article.imageUrl}"alt ="${article.altTxt}">
           <h3 class="productName">${article.name}</h3>
           <p class="productDescription">${article.description}</p>
         </article>
       </a>`       
    {
  }                  
}      
})//Mise en place du catch en cas d'erreur // 
.catch (()=>{
      document.querySelector(".titles").innerHTML+=
        `<h1>Erreur 404</h1>`        
})
;











