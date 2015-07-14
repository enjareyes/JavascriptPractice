// Given a number of rounds n, return all the possible rock-paper-scissors play 
// posibilities for that number of rounds.

// roundCount: 0 
// [ ]

// roundCount: 1 
// [ "r", "p", "s" ]

// roundCount: 2
// [ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]



function rockPaperPermutation (roundCount) {
  var res = [], outcomes = ['r','p','s']

  if (roundCount === 0) return [];

  var game = function(current) {
    var current = current || ''
    if(current.length === roundCount) res.push(current);
    else {
      for(var i = 0; i < outcomes.length; i++) { 
        game(current+outcomes[i])
      }
    }
  }

  game();
  return res;
}

