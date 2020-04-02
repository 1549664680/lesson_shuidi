var gameOfLife = function(board) {
  if (board.length === 0 || board[0].length === 0) return null;
  var Board = JSON.parse(JSON.stringify(board));
  var dirs = [[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]]
  for(var i = 0 ;i<Board.length;i++){
    for(var j = 0; j< Board[0].length;j++){
      var live = 0;
      if(board[i][j] == 0){
        var x,y;
        dirs.forEach(dir =>{
          x = i+dir[0]
          y = j+dir[1]
          if(x>=0&&y>=0&&x<Board.length&&y<Board[0].length){
            live+=Board[x][y] == 1?1:0;       
          }
        })
        board[i][j] = live == 3?1:0
      }else{
        var x,y;
        dirs.forEach(dir =>{
          x = i+dir[0]
          y = j+dir[1]
          if(x>=0&&y>=0&&x<Board.length&&y<Board[0].length){
            live+=Board[x][y] == 1?1:0;           
          }
        })
        board[i][j] = live>3||live<2?0:1
      }
    }
  }
  return board
}; 
console.log(gameOfLife(
  [
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]))