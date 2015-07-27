// Sudoku Checker
// Given a full sudoku board, return "solved" if the board is solved, or "invalid" if the board is invalid.

// Inputs:
// boardStr: "895631472\n327984516\n461257398\n942813765\n183765924\n756429183\n578142639\n214398657\n639578241"
// Expected: invalid
// boardStr: "795836421\n462195387\n381247956\n279458613\n654371892\n813629745\n147583269\n538962174\n926714538"
// Expected: solved


function sudokuCheck (boardStr) {
  var board = boardStr.split('\n')

  // if (!checkLength(board)) return 'invalid'; 

  for (var i = 0; i < 9; i++){
    for (var x = 1; x <= board[i].length; x++){      //checks rows
      if (board[i].indexOf(x) === -1) return 'invalid' 
    }

    var columnContents = {}
    for (var y = 0; y < 9; y++){    //checks columns
      columnContents[board[y][i]] = 1
      if (board[y][i] < 0 || board[y][i] > 9 || !columnContents[board[y][i]]) return 'invalid'
    }
  }

  var gridFunc = function(row, col){
    var grid = '';
    for (var i = row; i < row+3; i++){
      grid += (board[i].slice(col,col+3)) //slice 3 and add to grid string
    }

    for (var x = 1; x <= 9; x++){ //checking grid contains 1-9
      if (grid.indexOf(x) === -1) return false
    }
    return true
  }

  for (var row = 0; row < 3; row++){
    if (!gridFunc(row*3,0)) return 'invalid' 
    if (!gridFunc(row*3,3)) return 'invalid' 
    if (!gridFunc(row*3,6)) return 'invalid'
  } 

  return 'solved'
}

//validates 9x9 board
function checkLength(board){
  for (var i = 0; i < 9; i++){
    if (board[i].length !== 9) return false
  }
  return true
}








