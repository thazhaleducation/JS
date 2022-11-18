// ASync
function getDosa(callMeAfterPreparationFunc) {
  console.log("Dosai takes 10mins preparation");
  console.log("Waiting 10 mins....");
  setTimeout(function () {
    callMeAfterPreparationFunc("Dosa")
  }, 5000);
}

function getIdly(callMeAfterPreparationFunc) {
  console.log("Idly takes less time")
  setTimeout(function () {
    callMeAfterPreparationFunc("Idly")
  }, 500);
}

function serveFood(food) {
  console.log("Deliver to Customer", food);
}

// user code
// Request
console.log("Asking Dosa...");
// Processing & Response
getDosa(serveFood);

// Request
console.log("Asking Idly...");
// Processing & Response
getIdly(serveFood);
