var movingCount = function(m, n, k) {
  let res = 0;
  let visited = new Array(m).fill(false).map(x => Array(n).fill(false))
  let i = 0 , j = 0
  function move(i,j,k){    
    let x = 0
    let y = 0
    i.toString().match(/\d/g).forEach(ele =>x+=+ele)
    j.toString().match(/\d/g).forEach(ele =>y+=+ele)   
    if(i<0||j<0||i>m-1||j>n-1||visited[i][j]||x+y>k){
      return 
    }
    visited[i][j] = true
    res++
    move(i+1,j,k)
    move(i,j+1,k)
  }
  move(i,j,k)
  return res;
};
console.log(movingCount(19,8,4))