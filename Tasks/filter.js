// Filter array by type name
//
// Step 2
// Add `const`
// Remove senseless blocks

'use strict';

const filter = (inputArray, type) => {
  const filteredArray = [];
  for (const element of inputArray) {
    if (typeof element === type) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};

module.exports = filter;
