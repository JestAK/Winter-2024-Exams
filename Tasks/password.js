// Generate random password
//
// Step 1
// Add 'use strict';
// Improve naming

'use strict';

let generatePassword = (alphabet, length) => {
  const MAX = alphabet.length;
  password = '';
  for (let i = 0; i < length; i++) {
    index = Math.floor(Math.random() * MAX);
    password = password + alphabet[index];
  }
  return password;
};

module.exports = generatePassword;
