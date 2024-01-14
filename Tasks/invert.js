// Reverse an array, you can't use .reverse()
//
// Step 2
// Add 'const'
// Fix formatting

'use strict';

const invert = (inputArray) => {
  const keysArray = Object.keys(inputArray);
  keysArray.forEach( (index) => keysArray[index] = inputArray.pop());
  return keysArray;
};

module.exports = invert;
