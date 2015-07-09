// Given a string, return true if it contains all balanced 
// parenthesis "()", curly-brackets " {} ", and square-brackets " [] ".

// Input                      Output

// "(x + y) - (4)"            true

// "(((10 ) ()) ((?)(:)))"    true

// "[{()}]"                   true

// "(50)("                    false


var isBalanced = function(str){
  var sets = [],
      parens = {'{':'}', '[':']', '(':')'};

  for (var i = 0; i < str.length; i++){
    var curr = str[i]

    if (parens[curr]) sets.push(curr);
    else if (curr === ')' || curr === '}' || curr === ']'){
      var last = sets.pop();
      if (parens[last] !== curr){
        return false;
      }
    }
  }
  return sets.length === 0
}



