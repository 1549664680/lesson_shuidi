// 解法二：动态规划+自底向上-I.
var minDistance = function(word1, word2) {
  if(word1 == word2){
      return 0;
  }
  // 行
  var n = word1.length;
  // 列
  var m = word2.length;
  if(!n || !m){
      return n || m;
  }
  var minDist = Array.from(new Array(n),() => new Array(m));
  // 初始化第1列第n行的数据
  for(var i = 0;i < n;++i){
      if(word1[i] == word2[0]){
          minDist[i][0] = i;
      }else{
          if(i == 0){
              minDist[i][0] = 1;
          }else{
              minDist[i][0] = minDist[i-1][0] + 1;
          }
      }
  }
  // 初始化第1行第n列的数据
  for(var j = 0;j < m;++j){
      if(word1[0] == word2[j]){
          minDist[0][j] = j;
      }else{
          if(j == 0){
              minDist[0][j] = 1;
          }else{
              minDist[0][j] = minDist[0][j-1] + 1;
          }
      }
  }
  for(var i = 1;i < n;++i){
      for(var j = 1;j < m;++j){
          if(word1[i] == word2[j]){
              minDist[i][j] = Math.min(minDist[i-1][j]+1,minDist[i][j-1]+1,minDist[i-1][j-1]);
          }else{
              minDist[i][j] = Math.min(minDist[i-1][j]+1,minDist[i][j-1]+1,minDist[i-1][j-1]+1);
          }
      }
  }
  return minDist[n-1][m-1];
};
console.log(minDistance("mitcmu","mtacnu"))