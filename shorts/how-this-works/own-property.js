var numbers = {
  a: 1,
  b: 2,
};


Object.defineProperty(
  numbers,
  "sum",
  {
    value: function () { return this.a + this.b; },
    enumerable: false
  }
)


for (const prop in numbers) {
  console.log(`prop: ${prop} => val: ${numbers[prop]}`);
}
console.log(Object.keys(numbers));
console.log(Object.getOwnPropertyNames(numbers))



