// Automated Grading
// A teacher needs your help grading her class of students. 
//Given a report of all student grades, return both the class average and the 
//average of each student. 

// NOTE: Round any calculations to the nearest 2 decimal places.

function autograde (report) {
  var result = {'all': 0}, classAverage = 0;
  var students = report.split('\n');
  var howManyStudents = students.length;

  for (var i = 0; i < students.length; i++){
    var studentProfile = students[i].split(' '), singleAverage = 0;

    for (var x = 1; x < studentProfile.length; x++){
      singleAverage += Number(studentProfile[x]);
    }
    
    singleAverage = singleAverage / (studentProfile.length-1)
    result[studentProfile[0]] = singleAverage
    classAverage += singleAverage
  }
  result['all'] = Math.round((classAverage/howManyStudents) * 100) / 100
  return result;
}


// Input 
// "Jon 19 14 15 15 16\nJeremy 15 11 10 15 16\nJesse 19 17 20 19 18" 
// Output
// { "all": 15.93, "Jon": 15.8, "Jeremy": 13.4, "Jesse": 18.6 }

