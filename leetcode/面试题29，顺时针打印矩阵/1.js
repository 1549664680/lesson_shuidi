/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if(matrix.length == 0){
    return []
  }
  let path = [[0,1],[1,0],[0,-1],[-1,0]]
  let res = []
  let i = 0,j = 0 ;
  let n = 0;
  let leni = matrix.length
  let lenj = matrix[0].length
  while(res.length !== lenj*leni){
    res.push(matrix[i][j])
    matrix[i][j] ="#"
    if((i+path[n][0])>leni-1||(i+path[n][0])<0 ||(j+path[n][1])<0 ||(j+path[n][1])>lenj-1||matrix[i+path[n][0]][j+path[n][1]] == "#" ){
      n = (n+1)%4
    }
    i +=path[n][0]
    j +=path[n][1]     
  }   
  return res
};