// Return an array without duplicates
//
// Step 1
// Add 'use strict';
// Improve naming

'use strict';

duplicate = (value, duplicateAmount) => {
  if (duplicateAmount <= 0) return [];
  else {
    result = [];
    for (let i = 0; i < duplicateAmount; i++) {
      result[i] = value;
    }
    return result;
  }
};

module.exports = duplicate;
