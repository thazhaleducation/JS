// Print star
var N = 10;
var current = 1;
while (current < 10) {
  var numberOfStars = current;
  var i = 1;
  var starText = "";
  while (i <= numberOfStars) {
    starText += "* "
    i = i + 1
  }
  console.log(starText);
  current = current + 1;
}
