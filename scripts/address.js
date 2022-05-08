document.querySelector("#confirmbtn").addEventListener("click", addAddress);

function addAddress() {
  let obj = {
    firstname: document.querySelector("#first").value,
    lastname: document.querySelector("#last").value,
    add1: document.querySelector("#addone").value,
    add2: document.querySelector("#addtwo").value,
    email: document.querySelector("#email").value,
    mobile: document.querySelector("#mobile").value,
    city: document.querySelector("#city").value,
    pincode: document.querySelector("#pin").value,
    state: document.querySelector("#state").value,
  };

  console.log(obj);
  localStorage.setItem("address", JSON.stringify(obj));
  window.location.href = "shipping.html";
}

document.querySelector("#cancelbtn").addEventListener("click", exit);

function exit () {
    window.location.href = "cart.html";
}
