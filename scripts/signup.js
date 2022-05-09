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

      let inputCaptchaValue = document.querySelector("#code").value;
      console.log('inputCaptchaValue:', inputCaptchaValue)
      let captchaValue = document.querySelector(".preview").textContent;
          console.log('captchaValue:', captchaValue)
          
          if ( inputCaptchaValue !==  captchaValue )
          {
              alert("Invalid Captcha!!");
              return;
          } else {
              
              alert("Registration Successfull");
              
          }

      obj = { email, pass1, pass2 };
      data.push(obj)
      localStorage.setItem("singupdata", JSON.stringify(data));
}



(function() {

    const fonts = ['sans-serif', 'arial', 'serif', 'monospace'];
    let captchaValue = '';

    function generateCaptcha () {
        let value = btoa(Math.random() * 1000000000);
        value = value.substr( 0, 5+Math.random() * 5);
        captchaValue = value;
    }

    function setCaptcha() {
        let html = captchaValue.split("").map( (char) => {
            const rotate = -20 + Math.trunc( Math.random() * 30 );
            const font = Math.trunc( Math.random() * fonts.length );
            return `<span
                style= "
                    transform : rotate(${rotate}deg);
                    font-family: ${fonts[font]};
                "
            >${char}</span>`;
        }).join("");
        document.querySelector(".preview").innerHTML = html;
    }
    function initCaptcha() {

        document.querySelector(".preview").addEventListener("click", function() {
            generateCaptcha();
            setCaptcha();
        });
        generateCaptcha();
        setCaptcha();
    }
    initCaptcha();
})();