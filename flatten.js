
//iterate through array
// check if array element is not an array
// if that's true then push into new array
//if it is an array then call function flatten on that element.
//return result array

function flatten (arrays) {
  var results = [];

  var recursive = function(element){
    for (var i = 0; i < element.length; i++){
      var currentElem = element[i];

      if (!Array.isArray(currentElem)) {
        results.push(currentElem);
      } else {
        if (Array.isArray(currentElem) && currentElem.length > 0){
          recursive(currentElem);
        }
      }
    }
  }

  recursive(arrays)
  return results;
}