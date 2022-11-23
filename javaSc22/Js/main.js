 var allProducts = document.querySelectorAll(".list li")
 var content = document.querySelector("#content")
 var btn = document.querySelector("#addToCart")
 var img = document.querySelector("#myImg")
 var sumPrice = document.querySelector ("#div1") ;
 var totalPrice =0;

    allProducts.forEach( function (item){
     item.onclick = function (){
        totalPrice += parseInt (item.getAttribute("price")) 
        content.innerHTML += item.textContent + " , ";
        if (content.innerHTML != "" ){
            
           btn.style.display = "block";
            btn.style.backgroundColor = "red"
             btn.style.color = "white"
             
         }
        
     }
 })
 btn.onclick = function (){
  sumPrice.innerHTML = totalPrice++;
 
  
 }
 //btn.onclick = function (){
 // sumPrice.innerHTML += totalPrice;
 
  
 //}

