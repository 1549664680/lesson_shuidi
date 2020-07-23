/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (!board) { return false }
  let xlen = board.length;
  let ylen = board[0].length
  let k = 0;
  for (let i = 0; i < xlen; i++) {
    for (let j = 0; j < ylen; j++){
      if(find(board,word, i,j,k,xlen,ylen)){
        return true
      }
    }
  }
  return false
};
function find(board,word,i,j,k,xlen,ylen){
  if(i<0 || j <0 || i >xlen-1 || j> ylen -1 || board[i][j] != word[k]){ // 边界条件 以及等不等于word中的值
    return false
  }
  if(k === word.length-1){  // k 来到最后了，说明走过一个成功的路线
    return true
  }
  let temp = board[i][j]
  board[i][j] ="#" // 访问过的标志
  let res = find(board,word,i+1,j,k+1,xlen,ylen)||find(board,word,i,j+1,k+1,xlen,ylen)||find(board,word,i-1,j,k+1,xlen,ylen)||find(board,word,i,j-1,k+1,xlen,ylen)
  // 分别从四个方向找，找到一个都算真true
  board[i][j] = temp // 这一趟复原，这一趟没找到，不代表别人找不到
  return res
}