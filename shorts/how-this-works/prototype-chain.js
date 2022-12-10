var numbers = {
  a: 1,
  b: 2,
  __proto__: {
    c: 3,
    d: 4,
    __proto__: {
      e: 5
    }
  }
}

console.log(numbers.e);
console.log({}.__proto__);