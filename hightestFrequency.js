function highestFreq (str) {
  var counter = {}, letter, letters = [];
  
  for (var i = 0; i < str.length; i++) {
    if (counter.hasOwnProperty(str[i])) {
      counter[str[i]] += 1
    } else {
      counter[str[i]] = 1
    }
  }

  var largest = counter[str[0]];

  for (var key in counter) {
    if (counter[key] > largest) {
      largest = counter[key]
      letter = key;
    } 
  }

  for (var key in counter) {
    if (counter[key] === largest) {
      letters.push(key)
    }
  }

  return letters.join('');
}
