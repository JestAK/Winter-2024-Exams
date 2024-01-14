// Get month number
//
// Step 2
// Add 'const'

'use strict';

const months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const month = (inputString) => {
  const monthsAmount = months.length;
  for (let i = 0; i < monthsAmount; i++) {
    if (inputString.toLowerCase().startsWith(months[i])) return i + 1;
  }
  return -1;
};

module.exports = month;
