
import navbar from "../Components/navbar.js"
document.getElementById("headIndex").innerHTML = navbar();
console.log(navbar);



document.querySelector(".consumer").addEventListener("mouseenter", show1);
function show1() {
    let right = document.querySelector(".block-2-right");
    right.style.visibility = "visible";
}

document.querySelector(".industry").addEventListener("mouseover", show2);
function show2() {
    let right = document.querySelector(".block-2-industry");
    right.style.visibility = "visible";
}

// document.querySelector(".industry").addEventListener("mouseleave", show16);
// function show16() {
//     let right = document.querySelector(".block-2-industry");
//     right.style.visibility = "hidden";
// }

document.querySelector(".cellphone").addEventListener("mouseenter", show3);
function show3() {
    let right = document.querySelector(".block-2-cellphone");
    right.style.visibility = "visible";
}

document.querySelector(".appliance").addEventListener("mouseenter", show4);
function show4() {
    let right = document.querySelector(".block-2-appliance");
    right.style.visibility = "visible";
}

document.querySelector(".fitness").addEventListener("mouseenter", show5);
function show5() {
    let right = document.querySelector(".block-2-fitness");
    right.style.visibility = "visible";
}

document.querySelector(".computer").addEventListener("mouseenter", show6);
function show6() {
    let right = document.querySelector(".block-2-computer");
    right.style.visibility = "visible";
}

document.querySelector(".health").addEventListener("mouseenter", show7);
function show7() {
    let right = document.querySelector(".block-2-health");
    right.style.visibility = "visible";
}

document.querySelector(".home").addEventListener("mouseenter", show8);
function show8() {
    let right = document.querySelector(".block-2-home");
    right.style.visibility = "visible";
}

document.querySelector(".drone").addEventListener("mouseenter", show9);
function show9() {
    let right = document.querySelector(".block-2-drone");
    right.style.visibility = "visible";
}

document.querySelector(".garden").addEventListener("mouseenter", show10);
function show10() {
    let right = document.querySelector(".block-2-garden");
    right.style.visibility = "visible";
}

document.querySelector(".car").addEventListener("mouseenter", show11);
function show11() {
    let right = document.querySelector(".block-2-car");
    right.style.visibility = "visible";
}

document.querySelector(".men").addEventListener("mouseenter", show12);
function show12() {
    let right = document.querySelector(".block-2-men");
    right.style.visibility = "visible";
}

document.querySelector(".watch").addEventListener("mouseenter", show13);
function show13() {
    let right = document.querySelector(".block-2-watch");
    right.style.visibility = "visible";
}

document.querySelector(".gearbest").addEventListener("mouseenter", show14);
function show14() {
    let right = document.querySelector(".block-2-gearbest");
    right.style.visibility = "visible";
}

// Slideshow Code is here 
let imgslide = document.getElementById("hp-block2");
let i = 1;
let image_arr = [
  "https://uidesign.gbtcdn.com/GB/image/8823/1190X4200.jpg?imbypass=true",
  "https://uidesign.gbtcdn.com/GB/image/9746/1190X420.jpg",
  "https://uidesign.gbtcdn.com/GB/image/8823/PC+1190X420-en.jpg",
  "https://uidesign.gbtcdn.com/GB/image/9746/PC+1190.jpg?imbypass=true",
  "https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg?imbypass=true",
];

imgslide.style.backgroundImage = `url(${image_arr[0]})`;
setInterval(function () {
  if (i == image_arr.length) i = 0;

  imgslide.style.backgroundImage = `url(${image_arr[i]})`;
  i++;
}, 3500);
