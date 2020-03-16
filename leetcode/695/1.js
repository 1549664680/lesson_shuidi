var dirs = [[0,1],[0,-1],[-1,0],[1,0]]; // 通过加减，实现上下左右
var maxAreaOfIsland = function(grid) {
  var m = grid.length,
      n = grid[0].length,
      max = 0;
  for(var i = 0 ; i< m ; i++ ){
    for(var j = 0; j< n ; j++){
      if(grid[i][j] == 1){ //当前为1 ，也就是为陆地时
        max = Math.max(max,finder(grid,i,j,m,n))
      }    
    }
  }
  return max;
}
var finder = function(grid,i,j,m,n){
  if(i < 0|| j< 0|| i>=m || j>=n || grid[i][j] == 0) return 0;
  let cnt = 1
  grid[i][j] = 0;
  dirs.forEach(dir => {
   cnt += finder(grid, i + dir[0], j + dir[1],m,n);
  });
  return cnt
}
console.log(maxAreaOfIsland(
  [[1,1,0,1,1],
  [1,0,0,0,0],
  [0,0,0,0,1],
  [1,1,0,1,1]]),'===')