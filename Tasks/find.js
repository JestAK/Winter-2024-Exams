// Find key by value
//
// Step 3
// Remove senseless blocks

'use strict';

const findKey = (object, value) => {
  for (const name in object) {
    if (object[name] === value) return name;
  }
  return undefined;
};

module.exports = findKey;
