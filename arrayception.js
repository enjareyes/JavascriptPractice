// Arrayception
// Given an array of arbitrarily nested arrays, retun n, 
// where n is the deepest level that contains a non-array value.

// input:  [ [ 5 ], [ [ ] ] ]  
// 2

// input:  [ 10, 20, 30, 40 ]  
// 1

// input:  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]  
// 4

// input:  [ ] // 0


function arrayception (array) {
  var count = 0;
  if(array.length === 0) return count;

  function recurse(arr, lev){ 
    for(var i = 0; i < arr.length; i++){
      if(Array.isArray(arr[i])) recurse(arr[i],lev+1); //if array contains arrays- go deeper + add to depth
      else if (arr[i]!== undefined) { //if it's not an array, compare current count with level to get largest
        if (count < lev) count = lev; 
      }
    }
  }
  recurse(array,1)
  return count
}


//or

function arrayception(array){

  var recurse = function(elem){
    if (elem instanceof Array){
      if (elem.length===0) return 0;
      var elem2 = elem.map(recurse)
      var value = Math.max.apply(Math,elem2)
      return value===0 ? 0 : value+1
    } else {
      return 1
    }
  }
  
  return (recurse(array)||1)-1
}








