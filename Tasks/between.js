// Extract substring between prefix and suffix
//
// Step 3
// Don't mutate incoming parameters
// Separate index variable on 2 variables 'prefixIndex' and 'suffixIndex' for better understanding

'use strict';

const getValueBetween = (string, prefix, suffix) => {
  const prefixIndex = string.indexOf(prefix);
  if (prefixIndex === -1) return '';
  const substringIndex = prefixIndex + prefix.length;
  let resultString = string.substring(substringIndex);
  if (suffix) {
    const suffixIndex = resultString.indexOf(suffix);
    if (suffixIndex === -1) return '';
    resultString = resultString.substring(0, suffixIndex);
  }
  return resultString;
};

module.exports = getValueBetween;
