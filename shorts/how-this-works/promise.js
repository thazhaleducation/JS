var afterSometime = new Promise(function (resolve, reject) {
  setTimeout(function () {
    //     resolve(200);
    reject(Error("Something went wrong"))
  }, 1000);

});


var processSuccess = function (result) {
  console.log(`Success result ${result}`);
}

var processFailure = function (result) {
  console.log(`Failed result ${result}`);
}

afterSometime
  .then(processSuccess)
  .catch(processFailure);