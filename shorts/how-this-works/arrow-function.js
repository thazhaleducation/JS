// What is arrow function

// Arguments not available
function add1() {
  return Object.values(arguments).reduce((acc, arg) => acc + arg, 0);
}

console.log(add1(1, 2, 3));

var add2 = function () {
  return Object.values(arguments).reduce((acc, arg) => acc + arg, 0);
}

console.log(add2(1, 2, 3));
var add3 = () => Object.values(arguments).reduce((acc, arg) => acc + arg, 0);

console.log(add3(1,2,3));

// This binding
const obj1 = {
  a: 2,
  doubler: function () { console.log(this.a * 2) },
  displayThis: function() { console.log(this) }
};

obj1.doubler();
obj1.displayThis();

const obj2 = {
  a: 2,
  doubler: () => console.log(this.a * 2),
  displayThis: () => console.log(this)
};

obj2.doubler();
obj2.displayThis();

