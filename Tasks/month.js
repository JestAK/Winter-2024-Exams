// Get month number
//
// Step 1
// Add 'use strict';
// Improve naming


'use strict';

months = [
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

month = (inputString) => {
  monthsAmount = months.length;
  for (let i = 0; i < monthsAmount; i++) {
    if (inputString.toLowerCase().startsWith(months[i])) return i + 1;
  }
  return -1;
};

module.exports = month;
