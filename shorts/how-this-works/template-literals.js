var count = 1;
var fruit = "mango";

var formattedStr = `I have ${count} ${fruit}`;
console.log(formattedStr);

const numberInWords = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six"
];

function toWord(strings, ...values) {
  return `${strings[0]}${numberInWords[values[0]]}${strings[1]}${values[1]}${strings[2]}`;
}

var formattedStrTagged = toWord`I have ${count} ${fruit}`;
console.log(formattedStrTagged);


var count = 2;
var fruit = "banana";

const pluralForm = { "mango": "mangoes", "jackfruit": "jackfruits", "banana": "bananas",
}

function pluralize(strings, ...values) {
  let fruit = values[1];
  if (values[0] > 1) {
    fruit = pluralForm[values[1]];
  }
  return `${strings[0]}${values[0]}${strings[1]}${fruit}${strings[2]}`;
}

var pluralizedStr = pluralize`I have ${count} ${fruit}`;
console.log(pluralizedStr);

