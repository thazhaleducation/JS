// global scope
function outer() {
  // scope of outer function
  var greeting = "வணக்கம்";

  function inner() {
    // scope of inner function
    var thanksNote = "நன்றி";
    console.log(greeting, thanksNote);
  }
  inner();
}
outer();