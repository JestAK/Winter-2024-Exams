// Reverse an array, you can't use .reverse()
//
// Step 3
// Remove 'keysArray' variable and add 'invertedArray'
// Remove senseless 'Object.keys(inputArray);'
// Avoid using forEach

'use strict';

const invert = (inputArray) => {
  const invertedArray = [];
  for (const element of inputArray) invertedArray.unshift(element)
  return invertedArray;
};

module.exports = invert;
