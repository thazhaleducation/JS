// Conditional 
var budget = 10000;

var mobilePrice = 9500;
var backcase = 400;
var screenProtectionCover = 200;
var tax = 10;

var total = mobilePrice + backcase + screenProtectionCover;
var taxOnTotal = total * tax / 100;
var totalWithTax = total + taxOnTotal;

console.log("Total price: " + total);
console.log("Price after tax: " + totalWithTax);


budget += 2000;

if (totalWithTax < budget) {
  console.log("I purchase all");
} else {
  console.log("I come back home");
}

