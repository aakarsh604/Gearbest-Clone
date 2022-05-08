let totalamount = localStorage.getItem("totalamount");
console.log(totalamount);
let Gtotal = document.querySelector("#Gtotal");
Gtotal.innerText = `₹${totalamount}`;
let sub = document.querySelector("#subtotal");
sub.innerText = `₹${totalamount}`;

let address = JSON.parse(localStorage.getItem("address"));
console.log(address);

let name = document.querySelector("#name");
name.innerText = address.firstname +" " + address.lastname;
let addone = document.querySelector("#addone");
addone.innerText = address.add1;
let addtwo = document.querySelector("#addtwo");
addtwo.innerText = address.add2;
let city = document.querySelector("#city");
city.innerText = address.city;
let pin = document.querySelector("#pin");
pin.innerText = address.pincode;
let mobile = document.querySelector("#mobile");
mobile.innerText = address.mobile;
let email = document.querySelector("#email");
email.innerText = address.email;


document.querySelector("#Obu").addEventListener("click", backtoAdd);

function backtoAdd() {
    window.location.href = "address.html";
}

document.querySelector("#applybtn").addEventListener("click", discount);

function discount () {

    let coupen = document.querySelector("#Osearch").value;

    if ( coupen === "MASAI20")
    {
        let coup = document.querySelector("#coup");
        coup.innerText =  `₹${((Number(totalamount)/100)*20)}`;
    
        let discountedtotal = ( Number(totalamount) - ((Number(totalamount)/100)*20));
        let Gtot = document.querySelector("#Gtotal");
        Gtot.innerText = `₹${discountedtotal}`;
    } else {
        alert("Invalid Coupon!");
        document.querySelector("#Osearch").value = null;
    }
}

document.querySelector("#But").addEventListener("click", payment);

function payment() {
    window.location.href = "payment.html";
}