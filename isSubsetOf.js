//  Make an array method that can return whether or not a context array is a subset of an input array. 
//  To simplify the problem, you can assume that both arrays will contain only strings.

//  var result = ['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox', 'cat']);
//  result === true

//  var result = ['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox']);
//  result === false

Array.prototype.isSubsetOf = function(fullArray) {

  for (var i = 0; i < this.length; i++){
    if (fullArray.indexOf(fullArray[i]) === -1) return false;
  }
  return true

};
