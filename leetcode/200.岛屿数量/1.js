var numIslands = function(grid) {
  let res = 0;
  if(grid.length === 0)return res
  let lenx = grid.length;
  let leny = grid[0].length
  let find = function (i,j,lenx,leny){
    if(i<0||j<0||i>lenx-1||j>leny-1||grid[i][j] === "0"||grid[i][j]==="2"){
      return
    }
    grid[i][j] = "2"
    find(i+1,j,lenx,leny)
    find(i,j+1,lenx,leny)
    find(i,j-1,lenx,leny)
    find(i-1,j,lenx,leny)
  }
  for (let i = 0; i < lenx; i++){
    for (let j = 0; j < leny; j++){
      if(grid[i][j] ==="1"){
        find(i,j,lenx,leny)
        // console.log(grid)
        res++
      }
    }
  }
  return res
};
console.log(numIslands([
  ["1","1","1"],
  ["0","1","0"],
  ["1","1","1"]]))