function loadScript(filename, callback) {
  setTimeout(function () {
    callback(null, `Loaded ${filename}`)
  }, 1000);
}


function step1(error, result) {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
    loadScript("2.js", step2);
  }
}

function step2(error, result) {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
    loadScript("3.js", step3);
  }
}

function step3(error, result) {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
  }
}

loadScript("1.js", step1);
