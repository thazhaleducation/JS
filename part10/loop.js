// Global Scope
var names = ["Vanji", "Velan", "Pechi"];

for (let i = 0; i < names.length; i++) {
  setTimeout(function () {
    //function scope
    console.log(names[i].toUpperCase())
  }, 1000);
}