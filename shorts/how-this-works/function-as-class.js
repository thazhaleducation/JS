// Constructor Function
var Car = function (
                    make,
                    model,
                    fuelRemaining,
                    mileage) {
  this.make = make;
  this.model = model;
  this.fuelRemaining = fuelRemaining;
  this.mileage = mileage;
}

Car.prototype.distanceToRefillFuel = function () {
  return this.fuelRemaining * this.mileage;
}

var tataNexon1 = new Car("Tata", "Nexon", 10, 13);
var tataNexon2 = new Car("Tata", "Nexon", 10, 13);
var tataNexon3 = new Car("Tata", "Nexon", 10, 13);
var tataNexon4 = new Car("Tata", "Nexon", 10, 13);
tataNexon1.distanceToRefillFuel();
tataNexon2.distanceToRefillFuel();
tataNexon3.distanceToRefillFuel();
tataNexon4.distanceToRefillFuel();

