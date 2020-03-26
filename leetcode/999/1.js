var numRookCaptures = function(board) {
 var res = 0;
 var dirs = [[0,1],[0,-1],[-1,0],[1,0]];
 Board = board.slice().join("").replace(/\,/g,"")
 var a = m = parseInt(Board.indexOf("R") / 8 )
 var b = n = Board.indexOf("R") % 8
  dirs.forEach(dir => {
    while (0<=a&&a<8 && 0<=b&&b<8 && board[a][b] != "B") {
      if(board[a][b] == "p") {
        res++
        break
      }
      a+=dir[0]
      b+=dir[1]  
    }
    a = m 
    b = n
  });
 return res;
};
console.log(numRookCaptures(
[
[".",".",".",".",".",".",".","."],
[".",".",".","p",".",".",".","."],
[".",".",".","p",".",".",".","."],
["p","p",".","R",".","p","B","."],
[".",".",".",".",".",".",".","."],
[".",".",".","B",".",".",".","."],
[".",".",".","p",".",".",".","."],
[".",".",".",".",".",".",".","."]]))