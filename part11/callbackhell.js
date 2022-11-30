function loadScript(filename, callback) {
  setTimeout(function() {
    callback(null, `Loaded ${filename}`) 
  }, 1000);
}

loadScript("main.js", function(error, result) {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
  }
});
