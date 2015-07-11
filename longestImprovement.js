function longestImprovement (numbers) {
  var longest = 1, current = 1;

  for (var i = 0; i <numbers.length; i++) {
    if (numbers[i] < numbers[i+1]){
      current += 1;
    } else {
      if (current >= longest){ longest = current }
      current = 1;
    }
  }
  return longest;
}
