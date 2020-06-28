/**
 * @param {number[][]} grid
 * @return {number}
 */
let routes = [[0,1],[1,0],[0,-1],[-1,0]]  // 点的行走路劲
var maxAreaOfIsland = function(grid) {
  let x = grid[0].length; 
  let y = grid.length
  let max = 0; 
  for(let i = 0 ;i <y;i++){
    for(let j = 0;j < x;j++){
      if(grid[i][j] === 1){ // 为一 ，开始寻找
        max = Math.max(max,find(i,j,grid,x,y)) 
      }
    }
  }
  return max
};
function find(i,j,grid,x,y){
if(i<0 || j < 0 || i>=y||j>=x || grid[i][j] === 0){return 0} //边界判断
let cnt = 1; // 通过边界判断，初始化一个计数器
grid[i][j] = 0 // 访问过，变为0，防止下次遍历
routes.forEach(route => {  // 从这个点出发，走一遍四个位置。
    cnt += find(i + route[0],j+ route[1],grid,x,y)
});
return cnt 
}

// 思路，找到为一的点，以这个点为出发点，向四周扩散，然后四周扩散的点依次扩散。