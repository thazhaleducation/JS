function doubler(element) {
  console.log("Doubling: ", element, " * 2 = ", element * 2);
}


function tripler(element) {
  console.log("Tripling: ", element, " * 3 = ", element * 3);
}


function processEachElement(arr, processFunction) {
  for (var i = 0; i < arr.length; i++) {
    processFunction(arr[i]);
  }
}

var listOfNumbers = [1, 2, 3, 4, 5];
processEachElement(listOfNumbers, doubler);
processEachElement(listOfNumbers, tripler);