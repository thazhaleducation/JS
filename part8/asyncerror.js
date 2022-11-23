function setAge(age, callback) {
  setTimeout(function () {
    if (age < 0) {
      callback(Error("Age cannot be -ve"), undefined);
      return;
    }
    //     Writing to database
    callback(undefined, "Age Written to Database is " + age);
  }, 2000);
}



function callMeAfterDBWrite(error, result) {
  if (error) {
    console.log(error.message);
  } else {
    console.log(result);
  }
}
// setAge(10, callMeAfterDBWrite);
setAge(-10, callMeAfterDBWrite);

// setAge(20);
