'use strict';
var productName = document.getElementById('productName');
var productPrice = document.getElementById('productPrice');
var productQuantity = document.getElementById('productQuantity');
var products = document.getElementById('products');
var addAll = document.getElementById('button');
var finalPrice = document.getElementById('final');
var error = document.getElementById('error');
var total = 0;

addAll.addEventListener("click", function(e) {
	e.preventDefault();
	var singleItem = productName.value;
	if(!parseInt(productPrice.value)) {
		error.innerHTML = "Please enter a valid price or quantity.";
	} 
	else {
		var price = parseFloat(productPrice.value);
		var quantity = parseInt(productQuantity.value);
		var pretax = (price*quantity);
		var totalTax = pretax*0.055;
		total += pretax + totalTax;
		var addProduct = document.createElement("div");
		addProduct.innerHTML ="Name:  " + singleItem 
		+"<br>" + " Pretax Amount:  $" + pretax + "<br>" + " Tax Amount:  $" + totalTax
		products.appendChild(addProduct) +"<br>";
		finalPrice.innerHTML = "Final Price:  $" + Math.round(total * 10) /10;
	}
})