var updateMatrix = function(matrix) {
  let x = matrix.length;
  let y = matrix[0].length;
  let listx = [];
  let listy = []
  for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        if(matrix[i][j] === 1){
          listx.push([i,j])
        }else{
          listy.push([i,j])
        }
      }
  }
  // console.log(listx)
  for(let i = 0; i<listx.length;i++){
    let min = 999
    for(let j = 0; j<listy.length;j++){
      min = Math.min(Math.abs(listx[i][0]-listy[j][0])+Math.abs(listx[i][1]-listy[j][1]),min)
    }
    // console.log(listx[i][0],listx[i][1])
    matrix[listx[i][0]][listx[i][1]] = min
  }
  return matrix
};
console.log(updateMatrix([[0,0,0],[0,1,0],[1,1,1]]))