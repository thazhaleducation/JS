var numbers = [1, 5, 6, 7, 9, 11];
// How part is either
// REDUCED or ABSTRACTED
//How: REDUCED
function isOdd(num) {
  return num % 2 != 0;
}

// What part:
// Here Every is a function
// of Javascript array
numbers.every(isOdd); 

