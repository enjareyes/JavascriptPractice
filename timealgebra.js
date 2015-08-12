// Time Algebra
// Given a time and an hour amount, return the added result.


function modTime (time, hours) {
  var timeOfDay = time.slice(-2)
  var newTime = [], result = ''

  for (var i = 0; i < time.length; i++){
    if (!isNaN(parseFloat(time[i]))) {
      newTime.push(parseInt(time[i]));
    }
  }
  newTime = newTime.join('')
  newTime = String((newTime - 60) - hours).split(''); //blaaaah 
  
  if (newTime.length === 3){
    result = newTime[0] + ':' + newTime[1] + newTime[2] + timeOfDay
  } else {
    result = newTime[0] + newTime[1] + ':' + newTime[2] + newTime[3] + timeOfDay
  }

  return result
}
