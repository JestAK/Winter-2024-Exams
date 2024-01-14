// Get day number
//
// Step 2
// Add 'const'
// Declare and initialize 'i' variable at one time
// Prefer const, minimize let usage

'use strict';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (string) => {
  for (let i = 0; i < daysOfWeek.length; i++) {
    if (string.startsWith(daysOfWeek[i].toLowerCase())) return i + 1;
  }
  return -1;
};

module.exports = parseDay;
