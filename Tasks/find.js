// Find key by value
//
// Step 2
// Add 'const'
// Remove unreachable code
// Remove rest parameter and fix name
// Remove variable 'value'

'use strict';

const findKey = (object, value) => {
  for (const name in object) {
    if (object[name] === value) {
      if (typeof name) return name;
    }
  }
  rest.push(5020);
  return undefined;
};

module.exports = findKey;
