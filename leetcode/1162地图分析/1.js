var maxDistance = function(grid) {
 var landlist = [],
     oceanlist = []
 var res = 0
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[0].length; j++){
      if(grid[i][j] == 1){
        landlist.push([i,j])
      }else{
        oceanlist.push([i,j])
      }
    }
 }
 if(landlist.length == 0 || oceanlist.length == 0){
   return -1
 }
 for (var i = 0; i < oceanlist.length; i++) {
  var distance = 99999;
  for (var j = 0; j < landlist.length; j++){
    distance = Math.min(distance,(Math.abs(landlist[j][0] - oceanlist[i][0]) + Math.abs(landlist[j][1] - oceanlist[i][1])))
  }
  res = Math.max(distance,res)
}
 return res
};
console.log(maxDistance([[1,0,1],[0,0,0],[1,0,1]]))