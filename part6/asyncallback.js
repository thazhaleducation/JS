function datePrinter() {
  console.log("Printing...", Date())
}

function processEachElement(arr, processFunction) {
  for (var i = 0; i < arr.length; i++) {
    setTimeout(function () {
      processFunction();
    }, 1000 * i);
  }
}

var listOfNumbers = [1, 2, 3, 4, 5];

processEachElement(listOfNumbers, datePrinter);