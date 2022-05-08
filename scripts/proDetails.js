import {navbar} from "../Components/navbar.js"
document.getElementById("headIndex").innerHTML = navbar();


import footer from "../Components/footer.js";
document.querySelector("#footer").innerHTML = footer();

var count =  document.getElementById("count")
var counter = 1;
document.querySelector("#add").addEventListener("click",incFun);

function incFun() {
  counter++;
  count.innerText = counter ;
}

document.querySelector("#subs").addEventListener("click",decFun);

function decFun() {
  if(counter>1){
    counter--;
  count.innerText = counter ;
  }
}


var proData = JSON.parse(localStorage.getItem("proInfo"))
console.log(proData);

var image = document.querySelector("#proImg");
image.src= proData.img_url;

var proName = document.querySelector("#proName");
proName.innerText= proData.name;

var proPrice = document.querySelector("#proPrice");
proPrice.innerText= `₹ ${proData.price}/-`;


let cartData = JSON.parse(localStorage.getItem("cart")) || [] ;

document.querySelector("#addBtn").addEventListener("click", addToCart);

function addToCart() {
  cartData.push(proData);

  localStorage.setItem("cart", JSON.stringify(cartData));
  
  let cartnum = JSON.parse(localStorage.getItem("cart"));
  let length = cartnum.length;
  document.querySelector(".js-cartNum").innerHTML = length;
  
}

let cartnum = JSON.parse(localStorage.getItem("cart"));
console.log(cartnum);
// let length = cartnum.length;
document.querySelector(".js-cartNum").innerHTML = length;
