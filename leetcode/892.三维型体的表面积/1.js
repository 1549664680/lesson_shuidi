var surfaceArea = function(grid) {
  var res = 0;
  var xlen = grid.length;
  var ylen = grid[0].length
  for(var i = 0; i < xlen ;i ++){
    for( var j = 0 ;j < ylen ; j++){
      if(grid[i][j] != 0) // 考虑坐标上有立方体
      {
      res += grid[i][j]*6-2*(grid[i][j]-1) // 坐标上立方体的总面积
      // 减去两个坐标之间的重合面积
      res -= Math.min(grid[i][j],(j+1)>ylen-1?0:grid[i][j+1]) 
      res -= Math.min(grid[i][j],(j-1)<0?0:grid[i][j-1])
      res -= Math.min(grid[i][j],(i+1)>xlen-1?0:grid[i+1][j])
      res -= Math.min(grid[i][j],(i-1)<0?0:grid[i-1][j])
      }
    }
  }
  return res;
};
console.log(surfaceArea([[1,0],[0,2]]));
