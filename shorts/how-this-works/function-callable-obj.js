var Person = function (firstName, areaOfInterest) {
  this.firstName = firstName;
  this.areaOfInterest = areaOfInterest;
}

var sivan = new Person("Sivan", "Metallurgy");

console.log(`firstName: ${sivan.firstName} - areaOfInterest: ${sivan.areaOfInterest}`);

var velan = new Person("Velan", "Farming");

console.log(`firstName: ${velan.firstName} - areaOfInterest: ${velan.areaOfInterest}`);

var sivan = {
  firstName: "Sivan",
  areaOfInterest: "Metallurgy"
};

console.log(sivan.call);
console.log(Person.call);