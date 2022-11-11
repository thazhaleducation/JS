var condition1 = true;
var condition2 = true;
var condition3 = true;

if (condition1) {
  console.log("block1");
} else {
  if (condition2) {
    console.log("block2");
  } else {
    if (condition3) {
      console.log("block3");
    } else {
      console.log("else block");
    }
  }
}