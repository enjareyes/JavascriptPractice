
// Given an array of numbers, calculate the greatest contiguous sum of numbers in it. 
// A single array item will count as a contiguous sum. 


function sumArray (array) {
  var max = 0, currentSum = 0;
    
  for (var i = 0; i < array.length; i++) {
    currentSum = Math.max((currentSum+array[i]), array[i])
    max = Math.max(currentSum, max)

    if (max === 0 && i === array.length-1){
      return Math.max.apply(null, array)
    }
  }

  return max
}
