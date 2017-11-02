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
        //Hämtar content diven från html:en och gör variabeln content av den
        var content = document.getElementById("content")
    
        /*Här skapar vi loopen, för att få ut informationen. Skapar och skriver ut ProductCard i loopen så att 
         man sedan kan få ut info från json filen i varje div*/
        for (var i = 0; i < listOfProducts.length; i++ ){
        var productCard = createProductCard(listOfProducts[i]);
        content.appendChild(productCard);
        }
        document.body.appendChild(content);
  
    }
        //
        function createProductCard (listOfProducts) {
            var productCard = document.createElement("div");
            productCard.className = "productCard";
            //Skapar h1 och hämtar titeln
            var getProductTitle = document.createElement("h1");
            getProductTitle.innerText = listOfProducts.title;
            
            //skapar h4 och hämtar Description
            var getProductDescription = document.createElement("h4");
            getProductDescription.innerText = listOfProducts.description;
            
            //Skapar image tagg och laddar in bilderna från "assets"
            var getProductImage = document.createElement("img");
            getProductImage.src = "assets/" + listOfProducts.image;
            
            //Skapar h4 och hämtar priset, plusar sedan på strängen "kr"
            var getProductPrice = document.createElement("h4");
            getProductPrice.innerText = listOfProducts.price+"kr";
            
            //Skapar button, en text som vi lägger till i knappen samt kundvagnsikonen
            var buttonElement = document.createElement("button");
            var cartbuttonText = document.createTextNode("Lägg till i kundvagnen");
            buttonElement.innerHTML = '<i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>'+ '\xa0' + '\xa0' + '\xa0' + 'Lägg till i kundvagnen' ;
            
            
           
        
       
        
            /*Börjar med att välja "span" i html:en för att skriva ut värdet från knapptrycket.
            Skriver sedan funktionen för ett knapptryck.
             Med alert får man en bekräftelse att man lagt till något i kundvagnen*/
            button  = 0;
    
            var span = document.querySelector("span");
            buttonElement.onclick = function() {
            
            alert("Du har lagt till en" + '\xa0'  +  listOfProducts.title   + '\xa0' +  "i kundvagnen") ; 
            button += 1;
            span.innerText = button;
            
            }

            //Här skrivs allt ut i producCard som vi skapade innan
            productCard.appendChild(getProductTitle);
            productCard.appendChild(getProductDescription);
            productCard.appendChild(getProductImage);
            productCard.appendChild(getProductPrice);
            productCard.appendChild(buttonElement);
            return productCard;
        }
      