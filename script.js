
var listOfProducts;



fetch("./products.json")
.then(function(response) {
    return response.json();
})
.then(function(products) {
    listOfProducts = products;
    createUIFromLoadedProducts();
});

/** Uses the loaded products data to create a visible product list on the website */
    function createUIFromLoadedProducts() {
    //Skapar diven där allt ska skrivas ut
    var content = document.createElement("div");
   

        for (var i = 0; i < listOfProducts.length; i++ ){
        var productCard = createProductCard(listOfProducts[i]);
        content.appendChild(productCard);

    }
    document.body.appendChild(content);
    /* Check your console to see that the products are stored in the listOfProducts varible */
  


}

    function createProductCard (listOfProducts) {
    var productCard = document.createElement("div")
    productCard.className = "productCard";

    var getProductTitle = document.createElement("h2");
    getProductTitle.innerText = listOfProducts.title;
    productCard.appendChild(getProductTitle);

    var getProductDescription = document.createElement("h4");
    getProductDescription.innerText = listOfProducts.description;
    productCard.appendChild(getProductDescription);

    var getProductImage = document.createElement("img");
    getProductImage.src = "assets/" + listOfProducts.image;
    productCard.appendChild(getProductImage);

    var getProductPrice = document.createElement("h4");
    getProductPrice.innerText = listOfProducts.price;
    productCard.appendChild(getProductPrice);

    var buttonElement = document.createElement("button");
    buttonElement.innerText = "Add to cart";
    productCard.appendChild(buttonElement);


     button  = 0;
    
     var span = document.querySelector("span");
      buttonElement.onclick = function() {
         button += 1;
         span.innerText = button;
      }

    return productCard;


}

  
  


 
