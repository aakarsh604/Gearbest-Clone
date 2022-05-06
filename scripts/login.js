var stored = JSON.parse(localStorage.getItem("singupdata"));

document.querySelector("#bt").addEventListener("click", loginchek);

function loginchek() {
    var email = document.querySelector("#mail").value;
    var password = document.querySelector("#pass").value;
   
    var flag1 = false; 
    var flag2 = false;
    
    for (var i = 0; i < stored.length; i++) {
      // console.log(stored[i]);
      if (stored[i].email === email && stored[i].pass1 === password){
        flag1 = true;
        flag2 = true;
      }
    }
    
    if ( flag1 == true && flag2 == true )
      {
        alert("Login Successful");
        window.location.href = "index.html";
      } else {
          alert("Login Failed!");
      }
  }