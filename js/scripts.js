function sortProducts() {
    const productList = document.getElementById("product-list");
    const products = Array.from(productList.querySelectorAll(".product"));
    const sortOption = document.getElementById("sort").value;

    products.sort((a, b) => {
        if (sortOption === "price_lohi") {
            return parseInt(a.getAttribute("data-price")) - parseInt(b.getAttribute("data-price"));
        } else if (sortOption === "price_hilo") {
            return parseInt(b.getAttribute("data-price")) - parseInt(a.getAttribute("data-price"));
        } else if (sortOption === "title_az") {
            return a.getAttribute("data-name").localeCompare(b.getAttribute("data-name"));
        } else if (sortOption === "title_za") {
            return b.getAttribute("data-name").localeCompare(a.getAttribute("data-name"));
        }
    });
 
    productList.innerHTML = "";
    products.forEach(product => productList.appendChild(product));
}

window.onload = sortProducts;


// const products = [
//     {id: 1, title:"#Red #Short #Round" , price: 15.99, category:"Short"},
//     {id: 2, title:"#Red #Medium #Coffin #Floral" , price: 42.75, category: "Medium"},
//     {id: 3, title:"#Red #Long #Stilleto #Spooky" , price: 69.99, category: "Long"},
//     {id: 4, title:"#Red #Square #Long #Winter" , price: 35.00, category: "Long"},
//     {id: 5, title:"#Green #Short #Square" , price: 34.99, category: "Short"},
//     {id: 6, title:"#Green #Long #Coffin #Floral" , price: 45.00, category: "Long"},
//     {id: 7, title:"#Green #Medium #Square #Winter" , price: 18.00, category: "Medium"},
//     {id: 8, title:"#Green #Square #XL" , price: 70.00, category: "XL"},
//     {id: 9, title:"#Orange #Long #Coffin #Fall" , price: 66.00, category: "Long"},
//     {id: 10, title:"#Orange #Short #Square #Spooky" , price: 50.00, category: "Short"},
//     {id: 11, title:"#Orange #Medium #Floral #Square" , price: 55.00, category: "Medium"},
//     {id: 12, title:"#Orange #XL #Stilleto" , price: 55.00, category: "XL"},
//     {id: 13, title:"#Pink #Short #Square #Floral" , price: 39.99, category: "Short"},
//     {id: 14, title:"#Pink #Medium #Square #Spooky " , price: 58.75, category: "Long"},
//     {id: 15, title:"#Pink #Coffin #Long #Winter" , price: 19.99, category: "Long"},
//     {id: 16, title:"#Pink #Short #Round" , price: 20.00, category: "Short"}
// ];

// function loadProducts(products) {
//     document.querySelector('#product-list').innerHTML = '';

//     products.forEach(product => {
//         let categorySlug = product.category.replaceAll(' ', '_').replaceAll("'", '');
//         categories.set(product.category, categorySlug);

//         addProduct(product);
//     });

//     if (products.length == 0) document.querySelector('#product-list').innerHTML = '<p>No matching products.</p>';
// }


// function filterProducts(e) {
//     let selectedCategory = e.target.value;
//     let filteredProducts = allProducts.filter(product => product.category == selectedCategory);

//     loadProducts(filteredProducts)
// }

// function sortProducts(e) {
//     let selectedOrder = e.target.value;
//     let sortedProducts = [...products];

//     switch (selectedOrder) {
//         case 'price_lohi': sortedProducts.sort((p1, p2) => p1.price - p2.price); break;
//         case 'price_hilo': sortedProducts.sort((p1, p2) => p2.price - p1.price); break;
//         case 'title_az': sortedProducts.sort((p1, p2) => p2.title == p1.title ? 0 : (p1.title > p2.title ? 1 : -1)); break;
//         case 'title_za': sortedProducts.sort((p1, p2) => p2.title == p1.title ? 0 : (p2.title > p1.title ? 1 : -1)); break;
//     }

//     loadProducts(sortedProducts)           
// }
