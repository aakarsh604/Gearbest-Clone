import footer from "../Components/footer.js";
document.querySelector("#footer").innerHTML = footer();

var cartData = JSON.parse(localStorage.getItem("cartData")) || [];
window.addEventListener("load",function (){
        displayData(cartData);
    })
    let qprice = JSON.parse(localStorage.getItem("qprice")) || [];

    let total = document.querySelector("#total-div");

    let total1 = cartData.reduce((ac, el) => {
        return ac + el.price;
    },0) 
    console.log(total1);

    let total2 = qprice.reduce((ac, el) => {
        return ac + el;
    },0)
    console.log(total2);

    total.innerText = total1 + total2;
    console.log("total", total.innerText);

    // displayData(cartData);
    
    function displayData(cartData) {
        document.querySelector("#Scart").innerText = "";
        
        cartData.map(function (e,i) {
            var div = document.createElement("div");
            var div1 = document.createElement("div1");
            var div2 = document.createElement("div2");
            div2.setAttribute("class", "counterbox")
            var div3 = document.createElement("div3");
            var div4 = document.createElement("div4");
            var div5 = document.createElement("div5");
            var div6 = document.createElement("div6");

            var img = document.createElement("img");
            img.src = e.img_url;
    
            var p1 = document.createElement("p");
            p1.setAttribute("class", "para1")
            p1.innerText = e.name;
    
            var p2 = document.createElement("p")
            p2.setAttribute("class", "para2")
            p2.setAttribute("id", "bestpricepar")
            p2.innerText = "₹" + e.price +" "
        
    
            var p3 = document.createElement("p");
            p3.setAttribute("class", "para3")
            p3.innerText = "₹" + [ e.qprice] ;

            var count = document.createElement("button")
            count.setAttribute("class", "count")
            count.innerText= 1 ;
        
            // var counter = 1;

            var cou = document.createElement("button")
            cou.setAttribute("class", "cou")
            cou.innerText="-" ;


            var cou1 = document.createElement("button")
            cou1.setAttribute("class", "cou1")
            cou1.innerText="+";
            cou.addEventListener("click",decFun)
            function decFun() {
                if(counter>1){
                  counter--;
                  count.innerText = counter ;
                  p3.innerText = "₹" + [ e.price*counter] ;
                  let addprice = e.price;
                  qprice.push(addprice);
                  localStorage.setItem("qprice", JSON.stringify(qprice))
                //   window.location.reload();
                }
              }

            cou1.addEventListener("click",incFun)
            function incFun() {
                counter++;
                count.innerText = counter ;
                p3.innerText = "₹" + [ e.price*counter] ;
                let addprice = e.price;
                qprice.push(addprice);
                localStorage.setItem("qprice", JSON.stringify(qprice));
                // window.location.reload();
            
            //     let total = document.querySelector("#total-div");
            //   total.innerText = cartData.reduce((ac, el) => {
            //       return ac + counter*el.qprice;
            //   },0) 
              }

            //   console.log(counter)
              
            //   let total = document.querySelector("#total-div");
            //   total.innerText = cartData.reduce((ac, el) => {
            //       return ac + num*el.qprice;
            //   },0) 

            var btn=document.createElement("button");
            btn.setAttribute("class", "bat")
            btn.innerText="Remove From Cart";
            btn.addEventListener("click",function (){
              removeFun(e,i);
            });

            div.append(img);
            div1.append(p1);
            div5.append(p2);
            div2.append(cou, count, cou1)
            
            div3.append(p3)
            div4.append(btn)
            document.querySelector("#Scart").append(div);
            document.querySelector("#Scart2").append(div1);
            document.querySelector("#Scart6").append(div5);
            document.querySelector("#Scart3").append(div2);
            document.querySelector("#Scart4").append(div3);
            document.querySelector("#Scart5").append(div4);

        });
          
            
    };

    function removeFun(elem,index){
        cartData.splice(index,1);
        localStorage.setItem("cartData",JSON.stringify(cartData));
        window.location.reload();
        // displayData(cartData);


    }

    var counter = 1;
    var count =  document.getElementById("count")

// document.querySelector(".cou1").addEventListener("click",incFun);

function incFun() {
  counter++;
  count.innerText = counter ;
}

// document.querySelector(".cou").addEventListener("click",decFun);

function decFun() {
  if(counter>1){
    counter--;
    count.innerText = counter ;
  }
}

