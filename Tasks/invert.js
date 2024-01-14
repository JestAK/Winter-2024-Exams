// Reverse an array, you can't use .reverse()
//
// Step 1
// Add 'use strict';
// Remove unused parameters
// Remove useless arguments and blocks
// Improve naming

'use strict';

invert = (inputArray) => {
  keysArray = Object.keys(inputArray);
  keysArray.forEach( (index) => {
    keysArray[index] = inputArray.pop();
  });
  return keysArray;
};

module.exports = invert;
