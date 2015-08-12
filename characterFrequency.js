// Character Frequency
// Write a function that takes as its input a string and returns 
// an array of arrays as shown below sorted in descending order 
// by frequency and then by ascending order by character.

// input: "aaabbc"
// output: [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

// input: "mississippi"
// output: [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

// input: ''
// output: []

function characterFrequency (string) {
  var count = {}, res=[];

  for (var i = 0; i < string.length; i++){
    if (count[string[i]]) count[string[i]]++
    else { count[string[i]] = 1 }
  }

  for (var key in count){ 
    res.push([key, count[key]])
  }

  res.sort(function(a,b){
    if (a[1] === b[1]){
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;
    }else {    
      if (a[1] > b[1]) return -1;
      if (a[1] < b[1]) return 1;
      return 0;
    }
  })

  return res
}

//or

function characterFrequency (string) {
  var count = {}, res=[];

  for (var i = 0; i < string.length; i++){
    if (count[string[i]]) count[string[i]]++
    else { count[string[i]] = 1 }
  }

  for (var key in count){ 
    res.push([key, count[key]])
  }
  
  res.sort(function(a,b){
    if(a[1] < b[1] || (a[1] === b[1] && a[0] > b[0]))return 1;
    else return -1;
  })

  return res
}