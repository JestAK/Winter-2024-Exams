// Filter array by type name
//
// Step 3
// Fix formatting

'use strict';

const filter = (inputArray, type) => {
  const filteredArray = [];
  for (const element of inputArray) {
    if (typeof element === type) filteredArray.push(element);
  }
  return filteredArray;
};

module.exports = filter;
