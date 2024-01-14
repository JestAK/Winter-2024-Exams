// Return an array with duplicates
//
// Step 2
// Add `const`
// Remove unneeded blocks, for example we do not need else here

'use strict';

const duplicate = (value, duplicateAmount) => {
  if (duplicateAmount <= 0) return [];
  const result = [];
  for (let i = 0; i < duplicateAmount; i++) {
    result[i] = value;
  }
  return result;
};

module.exports = duplicate;
