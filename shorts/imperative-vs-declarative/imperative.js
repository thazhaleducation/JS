var numbers = [1, 5, 6, 7, 9, 11];

// What: என்ன வேண்டும்?
function isAllOdd(nums) {
  // How Starts:
  // எப்படி அதை கண்டுபிடிப்பது?
  for(let i=0; i <= nums.length; i++) {
    if(!isOdd(nums[i])) {
      return false;
    } 
  }
  return true;
  // How Part ends
}

// How sub part starts
function isOdd(num) {
  return num % 2 != 0;
}
// How sub part ends

// Calling (what) function
isAllOdd(numbers);

