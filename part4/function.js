// Data initialisation
var budget = 10000;
var mobilePrice = 9000;
var backcase = 400;
var screenProtectionCover = 200;
var tax = 10;

// Tax calculation
var total = mobilePrice + backcase + screenProtectionCover;
var taxOnTotal = total * tax / 100;
var totalWithTax = total + taxOnTotal;

// Tax print
console.log("Total price: " + total);
console.log("Price after tax: " + totalWithTax);


// Purchase decision
if (totalWithTax < budget) {
  console.log("I purchase all");
} else {
  console.log("I come back home");
}


// Mobile and backcase
// Tax calculation
total = mobilePrice + backcase;
taxOnTotal = total * tax / 100;
totalWithTax = total + taxOnTotal;

// Tax print
console.log("Total price: " + total);
console.log("Price after tax: " + totalWithTax);


// Purchase decision
if (totalWithTax < budget) {
  console.log("I purchase mobile and backcase");
} else {
  console.log("I come back home");
}



// Only Mobile
// Tax calculation
total = mobilePrice;
taxOnTotal = total * tax / 100;
totalWithTax = total + taxOnTotal;

// Tax print
console.log("Total price: " + total);
console.log("Price after tax: " + totalWithTax);


// Purchase decision
if (totalWithTax < budget) {
  console.log("I purchase only mobile");
} else {
  console.log("I come back home");
}

