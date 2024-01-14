// Filter array by type name
//
// Step 1
// Add 'use strict';
// Improve naming

'use strict';

filter = (inputArray, type) => {
  filteredArray = [];
  for (element of inputArray) {
    elementIndex = inputArray.indexOf(element);
    if (typeof inputArray[elementIndex] !== type) {
      filteredArray.unshift(elementIndex);
    }
  }
  for (elementIndex of filteredArray) inputArray.splice(elementIndex, 1);
  return inputArray;
};

module.exports = filter;
