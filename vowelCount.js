// For this challenge you will be counting all the vowels in a string.

var vowelCount = function(str){
  var counter = { a:true, e:true, i:true, o:true, u:true }
  var tally = 0;

  for (var i = 0; i < str.length; i++){
    if (counter[str[i].toLowerCase()]) tally++
  }
  
  return tally;
}