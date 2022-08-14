//const bot = new Bot("5086430276:AAFSubQf2H-LETNS5_2N8I_IT1TQ_Z8JGGk", "1042142221");



document.addEventListener('DOMContentLoaded',function(event){
    
    var dataText = [ "Զգեստներ", "Շապիկներ", "Shop name"];
    
    function typeWriter(text, i, fnCallback) {
      if (i < (text.length)) {
       document.querySelector(".animh1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 1000);
      }
    }
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 3000);
       }
      if (i < dataText[i].length) {
       typeWriter(dataText[i], 0, function(){
         StartTextAnimation(i + 1);
       });
      }
    }
    StartTextAnimation(0);
  });

  var x = document.querySelectorAll(".addcart")
  const cart = document.querySelector("#cart")
  var zgestner = document.querySelector("#zgestner")
  var shapikner = document.querySelector("#shapikner")
  let dirq;
  cart.innerHTML = ""
  for (let i = 0; i < x.length; i++) {
      x[i].onclick = function () {
        console.log(x[i]);
        let imageUrl = x[i].parentElement.parentElement.parentElement.style.backgroundImage
        // imageUrl = imageUrl.slice(5)
        // imageUrl = imageUrl.split('')
        // console.log(imageUrl);
        // imageUrl.pop()
        // imageUrl.pop()
        // imageUrl = imageUrl.join("")
        // imageUrl = "../" + imageUrl
        console.log(imageUrl);
        
        //bot.sendFile(imageUrl, "dfsf")
          // .then(res => {
          //   console.log(res);
          // })

        if(cart.offsetHeight == 0){
          if(cart.innerHTML == ""){
          let offer =  document.createElement("div")
          offer.className = "offer"
          cart.appendChild(offer)

          let btn = document.createElement("button")
          btn.innerHTML = "Պատվիրել"
          offer.appendChild(btn)
        }
        }
        
          if(x[i].parentElement.parentElement.parentElement.parentElement.id == "zgestner"){
            dirq = "zgest"
            x[i].className = "fa fa-minus-circle addcart"
            console.log(x[i]);
            cart.appendChild(x[i].parentElement.parentElement.parentElement)
          }
          else if(x[i].parentElement.parentElement.parentElement.parentElement.id == "shapikner" ){
            dirq = "shapik"
            x[i].className = "fa fa-minus-circle addcart"
            console.log(x[i]);
            cart.appendChild(x[i].parentElement.parentElement.parentElement)
          }
          else if(x[i].parentElement.parentElement.parentElement.parentElement.id == "cart"){
            
            if(dirq == "zgest"){
              x[i].className = "fa fa-cart-plus addcart"
              console.log(x[i]);
              zgestner.appendChild(x[i].parentElement.parentElement.parentElement)
            }
            else if(dirq == "shapik"){
              x[i].className = "fa fa-cart-plus addcart"
              console.log(x[i]);
              shapikner.appendChild(x[i].parentElement.parentElement.parentElement)
            }
          }
          if( cart.offsetHeight > 10 && cart.offsetHeight < 200){
            document.getElementById("cart").style.display = "none";
          }
      }
  }