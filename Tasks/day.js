// Get day number
//
// Step 1
// Add 'use strict';
// Fix formatting
// Improve naming

'use strict';

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

parseDay = (string) => {
  let i;
  for (i = 0; i < daysOfWeek.length; i++) {
    if (string.startsWith(daysOfWeek[i].toLowerCase())) return i + 1;
  }
  return -1;
};

module.exports = parseDay;
