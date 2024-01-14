// Generate random password
//
// Step 2
// Add 'const' and 'let'
// Prefer const, minimize let usage
// Using '+=' instead of duplicate variable name

'use strict';

const generatePassword = (alphabet, length) => {
  const MAX = alphabet.length;
  let password = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * MAX);
    password += alphabet[index];
  }
  return password;
};

module.exports = generatePassword;
