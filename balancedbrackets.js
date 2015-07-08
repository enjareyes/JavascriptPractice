// Given a string, return true if it contains all balanced 
// parenthesis "()", curly-brackets " {} ", and square-brackets " [] ".

// Input                      Output

// "(x + y) - (4)"            true

// "(((10 ) ()) ((?)(:)))"    true

// "[{()}]"                   true

// "(50)("                    false


var isBalanced = function(input){
  var pairs = [],
      parens = { '{':'}', '[':']', '(':')' }

  for (var i = 0; i < input.length; i++){
    var x = input[i];

    if (parens[x]) pairs.push(x);
    else if (x === '}' || x === ']' || x === ')'){
      if (parens[pairs.pop()] !== x){
        return false;
      }
    }
  }

  return pairs.length === 0;
};



