// Range Class
// Build a class to represent a range of numbers that has: 
// 1. a beginning index,
// 2. an end index (optional). If there is no end index, 
// the range should include only the passed-in start value.
// 3. a 'step' (optional) The step is the interval at which elements are included. 
// For instance, a step of 1 includes every element in the range, 
// while a step of 2 includes every other element.

// You should allow a negative value for 'step' to count backwards. 
// If no step is provided and the start is more than the end, assume we're counting backwards.
// The range should have a constructor that accepts these arguments in this order: 
// 1. begining index 2. end index 3. step interval 

// It should also support the following utility functions:
// size(): return the number of items represented by the range
// each(callback(index)): iterate over the range, 
// passing each value to a callback function
// includes(index): return whether or not the range includes the passed value
// You should also be aware of the following caveats:
// Should return null if we are given no 'start' value.
// Range should use constant space, even during the `each` method, 
// * i.e. you should *not* use an array as backing storage.


// USAGE EXAMPLES: 
// var myRange = new Range(0,10); // a new range representing the numbers between 0 and 10 (inclusively) 
// var evenNumbers = new Range(2,8,2); // A range with the even numbers 2, 4, 6, and 8. 
// evenNumbers.each(function(val){ console.log(val+'!'); }); //Prints '2! 4! 6! 8!' 
// evenNumbers.size() //4 
// evenNumbers.includes(2) //True 
// evenNumbers.include(3) //False


var Range = function(start, end, step) {
  if (start === undefined) return null;
  else this.start = start;

  if (end === undefined) this.end = this.start;
  else this.end = end;

  if (step === undefined) this.step = (this.start < this.end) ? 1 : -1;
  else this.step = step;
};

Range.prototype.size = function () { 
  return Math.floor((this.end - this.start) / this.step) + 1;
};

Range.prototype.each = function (callback) {
  var numOfSteps = this.size(), 
      i = this.start 
  
  while(numOfSteps) {
    callback(i) 
    i += this.step
    numOfSteps-- 
  }
};

Range.prototype.includes = function (val) {
  var min = Math.min(this.start,this.end),
      max = Math.max(this.start,this.end)

  return ((val >= min) && (val <= max) && ((this.start - val) % this.step) == 0);
};









  if (this.step > 0) {
    for (var i = this.start; i <= this.end; i += this.step) {
      callback(i);
    }
  } else {
    for (var i = this.start; i >= this.end; i += this.step) {
      callback(i);
    }
  }



//another working solution:g


// var Range = function(start, end, step) {
//   if(start === undefined) return null;

//   this.storage = [];

//   if(end === undefined || start === end) {
//     this.storage.push(start);
//     return this;
//   }

//   step = step || Math.sign(end - start);
//   var size = (end - start)/step;
//   for(var i = 0; i <= size; i++) {
//     this.storage.push(start + i*step)
//   }

// };

// Range.prototype.size = function () {
//   return this.storage.length;
// };

// Range.prototype.each = function (callback) {
//   for (var i = 0; i < this.storage.length; i++){
//     callback(this.storage[i])
//   }
// };

// Range.prototype.includes = function (val) {
//   return this.storage.indexOf(val) !== -1
// };




