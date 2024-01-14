// Find longest string
//
// Step 3
// Remove duplicated blocks
// Remake function to arrow function

'use strict';

const longest = (inputArray) => {
  let maxLength = 0;
  let longestString;
  for (const string of inputArray) {
    if (string.length > maxLength) {
      maxLength = string.length;
      longestString = string;
    }
  }
  return longestString;
};

module.exports = longest;
