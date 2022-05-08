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



var proData = JSON.parse(localStorage.getItem("ProductDetail"))
console.log(proData);

proData.map(function(elem){

var image = document.querySelector("#proImg").value = null;
image.scr=elem.image;

var proName = document.querySelector("#proName").innerText = null;
proName.innerText=elem.name;

var proPrice = document.querySelector("#proPrice").innerText = null;
proPrice.innerText=elem.price;
});