//Javascript: Impossible Method Overloading

function displayName(name) {
  console.log(name);
}

function displayName(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);

}

function displayName() {
  for(arg of arguments) {
    console.log(arg);
  }
}

function displayName() {
  if (arguments.length == 2) {
    console.log(`${arguments[0]} ${arguments[1]}`);
  } else if (arguments.length == 1) {
    console.log(`${arguments[0]}`);
  } else {
    let nameBuilder = "";
    for (arg of arguments) {
      nameBuilder += arg + " ";
    }
    console.log(nameBuilder);
  }
}

displayName("Raja");
displayName("Raja", "Raja");
displayName("Raja", "Raja", "Chozhan");