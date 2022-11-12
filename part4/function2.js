// Data initialisation
var budget = 10000;
var mobilePrice = 9000;
var backcase = 400;
var screenProtectionCover = 200;
var tax = 10;

// Function initialization
function printTax() {
  // Tax print
  console.log("Total price without tax: " + total);
  console.log("Price after tax: " + totalWithTax);
}

function calculateTax(tempTotal, tempTax) {
  var taxOnTotal = tempTotal * tempTax / 100;
  return tempTotal + taxOnTotal;
}

// Tax calculation
var total = mobilePrice + backcase + screenProtectionCover;
var totalWithTax = calculateTax(total, tax);

printTax();
// Purchase decision
if (totalWithTax < budget) {
  console.log("I purchase all");
} else {
  console.log("I come back home");
}


// Mobile and backcase
// Tax calculation
total = mobilePrice + backcase;
totalWithTax = calculateTax(total, tax);



printTax();
// Purchase decision
if (totalWithTax < budget) {
  console.log("I purchase mobile and backcase");
} else {
  console.log("I come back home");
}


// Only Mobile
// Tax calculation
total = mobilePrice;
totalWithTax = calculateTax(total, tax);

printTax();

// Purchase decision
if (totalWithTax < budget) {
  console.log("I purchase only mobile");
} else {
  console.log("I come back home");
}


