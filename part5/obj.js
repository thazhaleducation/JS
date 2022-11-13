var obj = {};
obj = {
  name: "Velan",
  age: "33",
  address: "Main road, Kurinji",
};

console.log(obj);
console.log(obj.name);
console.log(obj["address"]);
console.log("age" in obj);
console.log("isMarried" in obj);
console.log(obj["isMarried"]);
delete obj["address"];
console.log(obj);