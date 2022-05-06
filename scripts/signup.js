document.querySelector("#register").addEventListener("click", signup);
let data = JSON.parse(localStorage.getItem("singupdata")) || [] ;

function signup () {
    // event.preventDefault();
    let email = document.querySelector('#mail').value;
    let pass1 = document.querySelector('#pass1').value;
    let pass2 = document.querySelector('#pass2').value;

    if ( email === "" )
    {
        return;
    }

    if ( (pass1.length > 1 && pass1.length < 6)  ||  (pass2.length > 1 && pass2.length < 6)  )
    {
        alert("Password should be of minimum 6 characters!");
        document.querySelector("#pass1").value = null;
        document.querySelector("#pass2").value = null;
        return;
    }

    if (pass1 != pass2) {
        alert("Passwords do not match!!");
        document.querySelector("#pass1").value = null;
        document.querySelector("#pass2").value = null;
        return;
      }

      obj = { email, pass1, pass2 };
      data.push(obj)
      localStorage.setItem("singupdata", JSON.stringify(data));
}