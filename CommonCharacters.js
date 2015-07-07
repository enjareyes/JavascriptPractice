// CommonCharacters

// Write a function that accepts two strings as arguments, and returns only the 
// characters that are common to both strings. Your function should return 
// the common characters in the same order that they appear in the first argument. 
// Ignore whitespace in your returned string. 

// Example: commonCharacters('acexivou', 'aegihobu') 

// Returns: 'aeiou'

commonCharacters = function(str1, str2){
  var res = {},
      letters = str1.split(''),
      compare = str2.split('');

  for (var i = 0; i < letters.length; i++){
    if (compare.indexOf(letters[i]) > -1 && letters[i] !== ' '){
      res[letters[i]] = 0
    }
  }

  return Object.keys(res).join('')
};