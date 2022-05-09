import {navbar} from "../Components/navbar.js"
document.getElementById("headIndex").innerHTML = navbar();


import footer from "../Components/footer.js";
document.querySelector("#footer").innerHTML = footer();


import { navbar_div } from "../Components/navbar-div.js";
document.getElementById('navbar-div').innerHTML=navbar_div()



let cellphoneData=[
   {
    img_url: "https://m.media-amazon.com/images/I/71g5MRbP52L._AC_UY218_.jpg",
    price: 11295.00,
     qprice: 11295.00,
    name: "【2022 Upgraded】Ajsaki K9 Gaming Headset"

   },
   {
    img_url: "https://m.media-amazon.com/images/I/716gbwgdY-L._AC_UY218_.jpg",
    price: 798.00,
    qprice: 798.00,
    name: "Tilted Nation 3 in 1 Gaming Headset and Controller"
   },
   {
    img_url: "https://m.media-amazon.com/images/I/71Xcl-j5ipL._AC_UY218_.jpg",
    price:999.00,
     qprice:999.00,
    name: "Razer Kraken Gaming Headset"
   },
   {
    img_url: "https://m.media-amazon.com/images/I/81FpaX4SvWL._AC_UY218_.jpg",
    price:19992.00,
     qprice:19992.00,
    name: "HyperX Cloud II - Gaming Headset"
   },

   {
    img_url: "https://m.media-amazon.com/images/I/71EHw68EScL._AC_UY218_.jpg",
    price:2000.00,
     qprice:2000.00,
    name: "Logitech G733 Lightspeed Wireless Gaming Headset"
   },
   {
    img_url: "https://m.media-amazon.com/images/I/71waplSVO7L._AC_UY218_.jpg",
    price:1505.00,
     qprice:1505.00,
    name: "SteelSeries Arctis 3 Console"
   },
   {
    img_url: "https://m.media-amazon.com/images/I/71g5MRbP52L._AC_UY218_.jpg",
    price:13073.00,
     qprice:13073.00,
    name: "SENZER SG500 Surround Sound Pro Gaming Headset"
   },
   {
    img_url: "https://m.media-amazon.com/images/I/61YFaZYf-nL._AC_UY218_.jpg",
    price:2171.00,
     qprice:2171.00,
    name: "Razer BlackShark V2 X Gaming Headset"
   },
   {
    img_url: "https://m.media-amazon.com/images/I/51CSzjwiYyL._AC_UY218_.jpg",
    price:8200.00,
     qprice:8200.00,
    name: "Syntech Link Cable 16FT"
   },
   {
    img_url: "https://m.media-amazon.com/images/I/71cfyfml2UL._AC_UY218_.jpg",
    price:200.00,
     qprice:200.00,
    name: "GIZORI Gaming Headset Xbox Headset"
   },
   {
    img_url: "https://m.media-amazon.com/images/I/61nnZlMLDpL._AC_UY218_.jpg",
    price:200.00,
     qprice:200.00,
    name: "Corsair VOID RGB Elite Wireless"
   },
   {
    img_url: "https://m.media-amazon.com/images/I/71JyCNTUJTL._AC_UY218_.jpg",
    price:300.00,
     qprice:300.00,
    name: "Razer Kraken V3 HyperSense"
   },
   {
    img_url: "https://m.media-amazon.com/images/I/61hJqr7P+iL._AC_UY218_.jpg",
    price:12092.00,
     qprice:12092.0,
    name: "Logitech G432 Wired Gaming Headset"
   },
   {
    img_url: "https://m.media-amazon.com/images/I/71QpZjrteES._AC_UY218_.jpg",
    price:17919.00,
     qprice:17919.0,
    name: "Fiodio Gaming Headset with Surround"
   },
   {
    img_url: "https://m.media-amazon.com/images/I/61E0BmJbyNL._AC_UY218_.jpg",
    price:169.00,
     qprice:169.00,
    name: "Razer Kraken Tournament Edition"
   },
   {
    img_url: "https://m.media-amazon.com/images/I/61j6ey6mBpL._AC_UY218_.jpg",
    price:7800.00,
     qprice:7800.00,
    name: "HyperX Cloud Stinger Core"
   },
   {
    img_url: "https://m.media-amazon.com/images/I/71g5MRbP52L._AC_UY218_.jpg",
    price:3331.00,
     qprice:3331.00,
    name: "Gaming Headsets Gaming Headphones"
   },
   {
    img_url: "https://m.media-amazon.com/images/I/61dwuOuWXmL._AC_UY218_.jpg",
    price:729.00,
     qprice:729.00,
    name: "SteelSeries Arctis 3 "
   },
   {
    img_url: "https://m.media-amazon.com/images/I/61W6I6T5wRL._AC_UY218_.jpg",
    price:1505.00,
     qprice:1505.00,
    name: "Gaming Headset with Microphone"
   },
   {
    img_url: "https://m.media-amazon.com/images/I/71g5MRbP52L._AC_UY218_.jpg",
    price:17919.00,
     qprice:17919.00,
    name: "Turtle Beach Stealth 600"
   },
]

function Cellphone(){
    document.getElementById('products-cell').innerHTML=""
    cellphoneData.forEach(function(ele){
        let box=document.createElement('div')
        let img=document.createElement('img')
        img.src=ele.img_url;
        img.style.height='220px'
        let name=document.createElement('p');
        name.innerText=ele.name;
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