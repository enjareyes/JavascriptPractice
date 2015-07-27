// Small Swap
// Given an array of negative/positive integers, swap the smallest element of the array with the first element of the array.

function smallSwap (numbers) {
  if (numbers.length>0){
    var smallest;
    for (var i = 0; i < numbers.length; i++){
      if (smallest === undefined) smallest = numbers[0];   
      if (smallest > numbers[i]) smallest = numbers[i]
    }
    var swap = numbers.indexOf(smallest)
    var swap2 = numbers.shift()
    numbers.unshift(smallest);
    numbers[swap] = swap2
    return numbers
  } else {
    return []
  }
}

//w/o for loop

function smallSwap (numbers) {
  if (numbers.length>0){
    var smallest = Math.min.apply(null, numbers);
    var swap = numbers.indexOf(smallest);
    var replace = numbers.shift();
    numbers.unshift(smallest);
    numbers[swap] = replace;
    return numbers
  } else { return [] }
}
