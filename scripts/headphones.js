import {navbar} from "../Components/navbar.js"
document.getElementById("headIndex").innerHTML = navbar();


import footer from "../Components/footer.js";
document.querySelector("#footer").innerHTML = footer();


import { navbar_div } from "../Components/navbar-div.js";
document.getElementById('navbar-div').innerHTML=navbar_div()



let cellphoneData=[
   {
    img: "https://m.media-amazon.com/images/I/71g5MRbP52L._AC_UY218_.jpg",
    price: 11295.00,
    Name: "【2022 Upgraded】Ajsaki K9 Gaming Headset"

   },
   {
    img: "https://m.media-amazon.com/images/I/716gbwgdY-L._AC_UY218_.jpg",
    price: 798.00,
    Name: "Tilted Nation 3 in 1 Gaming Headset and Controller"
   },
   {
    img: "https://m.media-amazon.com/images/I/71Xcl-j5ipL._AC_UY218_.jpg",
    price:999.00,
    Name: "Razer Kraken Gaming Headset"
   },
   {
    img: "https://m.media-amazon.com/images/I/81FpaX4SvWL._AC_UY218_.jpg",
    price:19992.00,
    Name: "HyperX Cloud II - Gaming Headset"
   },

   {
    img: "https://m.media-amazon.com/images/I/71EHw68EScL._AC_UY218_.jpg",
    price:2000.00,
    Name: "Logitech G733 Lightspeed Wireless Gaming Headset"
   },
   {
    img: "https://m.media-amazon.com/images/I/71waplSVO7L._AC_UY218_.jpg",
    price:1505.00,
    Name: "SteelSeries Arctis 3 Console"
   },
   {
    img: "https://m.media-amazon.com/images/I/71g5MRbP52L._AC_UY218_.jpg",
    price:13073.00,
    Name: "SENZER SG500 Surround Sound Pro Gaming Headset"
   },
   {
    img: "https://m.media-amazon.com/images/I/61YFaZYf-nL._AC_UY218_.jpg",
    price:2171.00,
    Name: "Razer BlackShark V2 X Gaming Headset"
   },
   {
    img: "https://m.media-amazon.com/images/I/51CSzjwiYyL._AC_UY218_.jpg",
    price:8200.00,
    Name: "Syntech Link Cable 16FT"
   },
   {
    img: "https://m.media-amazon.com/images/I/71cfyfml2UL._AC_UY218_.jpg",
    price:200.00,
    Name: "GIZORI Gaming Headset Xbox Headset"
   },
   {
    img: "https://m.media-amazon.com/images/I/61nnZlMLDpL._AC_UY218_.jpg",
    Name: "Corsair VOID RGB Elite Wireless"
   },
   {
    img: "https://m.media-amazon.com/images/I/71JyCNTUJTL._AC_UY218_.jpg",
    price:300.00,
    Name: "Razer Kraken V3 HyperSense"
   },
   {
    img: "https://m.media-amazon.com/images/I/61hJqr7P+iL._AC_UY218_.jpg",
    price:12092.00,
    Name: "Logitech G432 Wired Gaming Headset"
   },
   {
    img: "https://m.media-amazon.com/images/I/71QpZjrteES._AC_UY218_.jpg",
    price:17919.00,
    Name: "Fiodio Gaming Headset with Surround"
   },
   {
    img: "https://m.media-amazon.com/images/I/61E0BmJbyNL._AC_UY218_.jpg",
    price:169.00,
    Name: "Razer Kraken Tournament Edition"
   },
   {
    img: "https://m.media-amazon.com/images/I/61j6ey6mBpL._AC_UY218_.jpg",
    price:7800.00,
    Name: "HyperX Cloud Stinger Core"
   },
   {
    img: "https://m.media-amazon.com/images/I/71g5MRbP52L._AC_UY218_.jpg",
    price:3331.00,
    Name: "Gaming Headsets Gaming Headphones"
   },
   {
    img: "https://m.media-amazon.com/images/I/61dwuOuWXmL._AC_UY218_.jpg",
    price:729.00,
    Name: "SteelSeries Arctis 3 "
   },
   {
    img: "https://m.media-amazon.com/images/I/61W6I6T5wRL._AC_UY218_.jpg",
    price:1505.00,
    Name: "Gaming Headset with Microphone"
   },
   {
    img: "https://m.media-amazon.com/images/I/71g5MRbP52L._AC_UY218_.jpg",
    price:17919.00,
    Name: "Turtle Beach Stealth 600"
   },
]

function Cellphone(){
    document.getElementById('products-cell').innerHTML=""
    cellphoneData.forEach(function(ele){
        let box=document.createElement('div')
        let img=document.createElement('img')
        img.src=ele.img;
        img.style.height='220px'
        let name=document.createElement('p');
        name.innerText=ele.Name;
        name.style.textAlign='center'
        let price=document.createElement('p');
        price.innerText="₹"+ele.price;

        box.addEventListener('click',function(){
            headphonepage(ele);
            
        })
     
        box.append(img,name,price)
        document.getElementById('products-cell').append(box)
    })
}

Cellphone(cellphoneData)


function headphonepage(ele){
    localStorage.setItem('proInfo',JSON.stringify(ele));
    window.location.href = "proDetails.html";
}

document.getElementById('zero-to-thousand').addEventListener('click',productsort);

function productsort(){
//    console.log('working')
cellphoneData.sort(function(a,b){
       return Number(a.price)-Number(b.price);
   })
//    console.log(ProductDatas)
  Cellphone(cellphoneData)
}