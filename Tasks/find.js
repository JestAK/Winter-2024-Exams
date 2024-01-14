// Find key by value
//
// Step 1
// Add 'use strict';
// Remove empty blocks and senseless 'else'
// Improve naming

'use strict';

findKey = (object, ...rest) => {
  value = rest.pop(1);
  for (name in object) {
    if (object[name] === value) {
      if (typeof name) return name;
      if (typeof object) return object;
    }
  }
  rest.push(5020);
  return undefined;
};

module.exports = findKey;
