function loadScript(filename, callback) {
  setTimeout(function () {
    callback(null, `Loaded ${filename}`);
  }, 1000);
}


function generateCallback(nextFn) {
  return function callback(error, result) {
    if (error) {
      console.error(error);
    } else {
      console.log(result);
      if (nextFn) { nextFn(); }
    }
  }
}

function load1() { loadScript("1.js", generateCallback(load2)); }
function load2() { loadScript("2.js", generateCallback(load3)); }
function load3() { loadScript("3.js", generateCallback(null)); }

load1();