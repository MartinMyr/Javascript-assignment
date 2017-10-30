
var listOfProducts;


fetch("./products.json")
.then(function(response) {
    return response.json();
})
.then(function(products) {
    listOfProducts = products;
    createUIFromLoadedProducts();
});


    function createUIFromLoadedProducts() {
   
   
        //Skapar div där allt ska skrivas ut
        var content = document.createElement("div");
   
        //Loopar ut infot ur product.json
        for (var i = 0; i < listOfProducts.length; i++ ){
        var productCard = createProductCard(listOfProducts[i]);
        content.appendChild(productCard);

    }
        document.body.appendChild(content);

  


}

    function createProductCard (listOfProducts) {
        var productCard = document.createElement("div")
        productCard.className = "productCard";


        
        var getProductTitle = document.createElement("h1");
        getProductTitle.innerText = listOfProducts.title;
        


    
        var getProductDescription = document.createElement("h4");
        getProductDescription.innerText = listOfProducts.description;
        

        var getProductImage = document.createElement("img");
        getProductImage.src = "assets/" + listOfProducts.image;
        

        var getProductPrice = document.createElement("h4");
        getProductPrice.innerText = listOfProducts.price;
        

        var buttonElement = document.createElement("button");
        var cartbuttonText = document.createTextNode("Lägg till i kundvagnen");
        buttonElement.innerHTML = '<i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>'+ '\xa0' + '\xa0' + '\xa0' + 'Lägg till i kundvagnen' ;
        

        productCard.appendChild(getProductTitle);
        productCard.appendChild(getProductDescription);
        productCard.appendChild(getProductImage);
        productCard.appendChild(getProductPrice);
        productCard.appendChild(buttonElement);
        
       
         // Tilldelar värdet 0 till button, vid klick blir det +1 som visas i span. Alert  ger ett meddelande om vilken telefon man köper.

         button  = 0;
    
            var span = document.querySelector("span");
        buttonElement.onclick = function() {
            
            alert("Du har lagt till en" + '\xa0'  +  listOfProducts.title   + '\xa0' +  "i kundvagnen") ; 
            button += 1;
            span.innerText = button;
            

         }


            return productCard;


    }