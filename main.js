function  getProduct()
{

  axios.get("https://dummyjson.com/products").then(function(response)
{
let products = response.data.products;
const results = products.map(function (result) 
{
    return `

    <div class="pro">

      <img src="${result.thumbnail}">
      <a href="info.html?id=${result.id}">Details</a>
    </div>`;
    
}
).join('');
     document.querySelector(".products .row").innerHTML=results;
})}





getProduct();