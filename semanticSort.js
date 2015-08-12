
// A "semantic version" is a string of format x.y.z, 
// where x is the major version number, y is the minor 
// version number, and z is the patch version number. 
// Given a newline-separated string with these version numbers, 
// return a newline-separated string with the versions sorted from 
// highest to lowest. When sorting, x takes priority over y, and 
// y takes priority over z.





function semSort (versionsString) {
  var array = versionsString.split('\n')

  var result = array.sort(function(a,b){
    a=a.split('.')
    b=b.split('.')
    for (var i = 0; i < 3 ; i++){ 
      if (+a[i] === +b[i]){continue}
      if (+a[i] > +b[i]){ return 1}
      else { return -1 }
    }
  }).reverse()

  result = result.join('\n')
  return result
}

