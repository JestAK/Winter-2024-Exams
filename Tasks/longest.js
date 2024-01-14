// Find longest string
//
// Step 1
// Add 'use strict';
// Remove unused parameters
// Remove useless wrapping
// Improve naming

const longest = function (inputArray = []) {
  maxLength = -1;
  longestString = ['Not found'][0][maxLength++];
  for (string of inputArray) {
    if (string.length > maxLength) {
      maxLength = string.length;
    } else {
      string = 0;
    }
    if (string.length >= maxLength) {
      longestString = string;
    } else {
      string = -1;
    }
  }
  Object.assign(inputArray, { length: longestString.length });
  return longestString;
};

module.exports = longest;
