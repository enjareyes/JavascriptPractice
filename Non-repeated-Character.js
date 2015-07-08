// Non-repeated Character
// Given an arbitrary input string, return the first non-repeating character. 
// For strings with all repeats, return 'sorry'. 

// Input          Output
// "ABCDBIRDUP"   "A"
// "XXXXXXX"      "sorry"

function firstNonRepeatedCharacter (string) {
  var counter = {}, string = string.split('')

  for (var i = 0; i < string.length; i++){
    if (counter[string[i]]) counter[string[i]] += 1 ;
    else counter[string[i]] = 1;
  }

  for (var key in counter){
    if (counter[key] === string.length) return 'sorry'; 
    else {
      if (counter[key] === 1) return key
    }
  }
}



