// Rotated Array Search
// If you have a sorted array, a rotated version of that array is the 
// sorted array rotated some number of times left or right. For example, a 
// rotated version of [0, 1, 2, 3, 4] is [3, 4, 0, 1, 2] (rotated right twice). 

// Given a rotated, sorted array, your task is to efficiently find the index 
// of an element within that array. Your time complexity goal is O( log(n) ), 
// where 'n' is the number of elements in the array. For simplicity, you can assume 
// that there are no duplicate elements in the array. 

// function rotatedArraySearch (rotated, target) {
//   return rotated.indexOf(target)
// }

//binary search 

function rotatedArraySearch (rotated, target) {
  var pivot = rotated.indexOf(Math.min.apply(null, rotated))

  if (rotated.length === 1 && set[0] == target){ return 0 }

  var firstHalf = rotated.slice(pivot);
  var secondHalf = rotated.slice(0, pivot);

  if (target >= firstHalf[0] && target <= firstHalf[firstHalf.length-1]){
    console.log("inside first half")
    if (firstHalf.indexOf(target) > -1){
      rotatedArraySearch(firstHalf, target) + secondHalf.length;
    } else {
      return -1
    }
  } else if (target >= secondHalf[0] && target <= secondHalf[secondHalf.length-1]){
    console.log("inside second half")
    if (secondHalf.indexOf(target) > -1){
      rotatedArraySearch(secondHalf, target)
    } else {
      return -1
    }
  } else {
    return -1
  }
}




function rotatedArraySearch (rotated, target) {
  var first = 0, second = rotated.length-1, center;
  
  while (first<=second) { //while length of array is >= 1
    center = Math.floor((second+first) / 2);
  
    if (rotated[center] === target) { return center }
    
    if (rotated[first]<=rotated[center]) {
      if (rotated[first] <= target && target < rotated[center]) { 
        second = center-1
      } else {
        first = center+1
      }
    } else {
      if (rotated[center]<=target && target<rotated[second]) {
        first = center+1
      } else {
        second = center-1
      }
    }
  }
  return -1
};


