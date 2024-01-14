// Extract substring between prefix and suffix
//
// Step 2
// Add `const` and `let`
// Improve naming
// Remove unneeded blocks, for example we do not need else here

'use strict';

const getValueBetween = (string, prefix, suffix) => {
  let index = string.indexOf(prefix);
  if (index === -1) return '';
  const substringIndex = index + prefix.length;
  string = string.substring(substringIndex);
  if (suffix) {
    index = string.indexOf(suffix);
    if (index === -1) return '';
    string = string.substring(0, index);
  }
  return string;
};

module.exports = getValueBetween;

