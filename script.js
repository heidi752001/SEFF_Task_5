var AllProducts = document.querySelectorAll(".list1 .container .div_elements span")
var div1 = document.querySelector("#content")
var btn1 = document.querySelector("#btn1")
var span1 = document.querySelector("#span1")
var totalPrice = 0;
AllProducts.forEach(function(item){
    item.onclick = function(){
        totalPrice += parseInt(item.getAttribute("price"))
        if (AllProducts.innerHTML != "") {
            content.style.display = "block"
            content.style.fontSize = "50px"
            content.innerHTML += item.textContent + '.'
        }
        if (div1.innerHTML != ""){
            btn1.style.display = "block";
            btn1.style.backgroundColor = "rgb(48, 9, 9)"
            btn1.style.color = "white"
            btn1.style.fontSize = "25px"
            btn1.style.borderColor = "rgb(48, 9, 9)"
        }
        btn1.onclick = function(){
            if (btn1.innerHTML != ""){
                span1.style.display = "block";
                span1.style.color = "black"
                span1.style.fontSize = "40px"
                span1.innerHTML = totalPrice
            }
        }
    }
})
