// Bubble Sort
// Bubble sort is considered the most basic sorting algorithm in Computer Science. 
// It works by starting at the first element of an array and comparing it to the second element; 
// if the first element is greater than the second element, it swaps the two. 
//   It then compares the second to the third, and the third to the fourth, and so on; 
// in this way, the largest values 'bubble' to the end of the array. Once it gets to the end of the array, 
// it starts over and repeats the process until the array is sorted numerically. 

// Implement a function that takes an array and sorts it using this technique. 
// Don't use JavaScript's built-in sorting function (Array.prototype.sort).


var bubbleSort = function(array) {
  var sorted = false;
  
  while (!sorted){
    //keep track of how many swaps were preformed
    var noSwap = 0;
    //iterate over the array
    for (var i = 0; i < array.length-1; i++){ 
      //if current element is larger than next - swap the elements
      if (array[i] > array[i+1]){ 
        //capture next element
        var temp = array[i+1]; 
        //overwrite it with current
        array[i+1] = array[i];
        //set current to equal the next
        array[i] = temp;
      } 
      //if not then update the counter;
      else noSwap++ 
    }
    //if no swaps are preformed then the array is sorted
    if (noSwap === array.length-1) sorted = true;
  }
  return array;
};







// var swap = function(curIndex, nextIndex, array) {
//   var temp = array[curIndex]; //saves first value
//   array[curIndex] = array[nextIndex]; //overwrites first to equal next
//   array[nextIndex] = temp; //sets next to equal first
//   return array;
// };

// var bubbleSort = function(array) {
//   for (var i = 0; i < array.length; i++) {
//     var swaps = 0; 

//     for (var currentIndex = 0; currentIndex < array.length - 1 - i; currentIndex++) {
//       if (array[currentIndex] > array[currentIndex + 1]) {
//         swaps++;
//         swap(currentIndex, currentIndex + 1, array);
//       }
//     }
//     if (!swaps) break; 
//   }
//   return array;
// };




















