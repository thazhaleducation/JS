var a = 1;

function printA() {
  var b = 2;

  function printC() {
    var c = 3;
    console.log("Printing var a inside inside function", a);
    console.log("Printing var b inside inside function", b);
    console.log("Printing var c inside inside function", c);  
  }
  console.log("Printing var a inside function", a);
  console.log("Printing var b inside function", b);
  // console.log("Printing var c inside function", c);
  printC();
}

printA();

console.log("Printing var a outside function", a);
// console.log("Printing var b outside function", b);
// console.log("Printing var c outside function", c);