// Find longest string
//
// Step 2
// Add 'use strict';
// Add 'const' and 'let'
// Remove useless blocks
// Remove default value of parameter 'inputArray'

'use strict';

const longest = function (inputArray) {
  let maxLength = 0;
  let longestString;
  for (const string of inputArray) {
    if (string.length > maxLength) {
      maxLength = string.length;
    }
    if (string.length >= maxLength) {
      longestString = string;
    }
  }
  return longestString;
};

module.exports = longest;
