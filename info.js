function getDetails()
{
    const urlParams= new URLSearchParams(window.location.search);
       // console.log(urlParams);

    const id = urlParams.get('id');
    axios.get(`https://dummyjson.com/products/${id}`).then(function(response)
 {
 const {title,price,description}= response.data;
 document.querySelector(".inorfmation .title") .textContent=title ;
 document.querySelector(".inorfmation .price") .textContent=price ;
 document.querySelector(".inorfmation .description") .textContent=description;


})

}
getDetails();