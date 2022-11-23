function setAge(age) {
  if (age < 0) {
    throw Error("Age cannot be -ve")
  }
  console.log("Age Written to Database is " + age);
}

setAge(10);
try {
  setAge(-10);
} catch(err) {
  console.error(err.message);
}
setAge(20);
