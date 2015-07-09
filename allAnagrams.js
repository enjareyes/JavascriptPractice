// Given a single input string, write a function that produces all possible anagrams of a 
// string and outputs them as an array. At first, don't worry about repeated strings. 
// What time complexity is your solution? 


function allAnagrams(string) {
  var string = string.split('') 
      check = {};

  function perm(arr, current) {
    var res, current = current || [];

    for (var i = 0; i < arr.length; i++) { //iterating through each letter in string
      res = arr.splice(i, 1); // res = letter in string
      var x = current.concat(res).join('') //x = array
      if (arr.length === 0 && !check[x]) check[x] = 1; //if all letters are done then add it to results
      perm(arr.slice(), current.concat(res)); //else call perm on remaining letters 
      arr.splice(i, 0, res[0]); // add removed letter from string back to the array 
    }
    return Object.keys(check) 
  }

  return perm(string);
}