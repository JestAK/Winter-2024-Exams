// Extract substring between prefix and suffix
//
// Step 4
// Find prefixIndex and suffixIndex in the beginning
// Remove code duplication
// Remove unused 'resultString' variable

'use strict';

const getValueBetween = (string, prefix, suffix) => {
  const prefixIndex = string.indexOf(prefix);
  const suffixIndex = suffix ? string.indexOf(suffix) : string.length;
  if (prefixIndex === -1 || suffixIndex === -1) return '';
  const substringIndex = prefixIndex + prefix.length;
  return string.substring(substringIndex, suffixIndex);
};

module.exports = getValueBetween;
