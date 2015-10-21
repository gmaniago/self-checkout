(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var productName = document.getElementById('productName');
var productPrice = document.getElementById('productPrice');
var productQuantity = document.getElementById('productQuantity');
var products = document.getElementById('products');
var addAll = document.getElementById('button');
var finalPrice = document.getElementById('final');
var error = document.getElementById('error');
var total = 0;

addAll.addEventListener("click", function (e) {
	e.preventDefault();
	var singleItem = productName.value;
	if (!parseInt(productPrice.value)) {
		error.innerHTML = "Please enter a valid price or quantity.";
	} else {
		var price = parseFloat(productPrice.value);
		var quantity = parseInt(productQuantity.value);
		var pretax = price * quantity;
		var totalTax = pretax * 0.055;
		total += pretax + totalTax;
		var addProduct = document.createElement("div");
		addProduct.innerHTML = "Name:  " + singleItem + "<br>" + " Pretax Amount:  $" + pretax + "<br>" + " Tax Amount:  $" + totalTax;
		products.appendChild(addProduct) + "<br>";
		finalPrice.innerHTML = "Final Price:  $" + Math.round(total * 10) / 10;
	}
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map