var maximalSquare = function (matrix) {
  if(!matrix.length){
    return 0
  }
  let lenx = matrix.length;
  let leny = matrix[0].length;
  // if(lenx === leny === 1){
  //   return 0
  // }
  let max = 0;
  let dp = JSON.parse(JSON.stringify(matrix))
  for (let i = 0; i < lenx; i++) {
    for (let j = 0; j < leny; j++) {
      if (matrix[i][j] == '1') {
        if (i === 0 || j === 0) {
          dp[i][j] = 1
        } else {
          dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
        }
      } else {
        dp[i][j] = 0
      }
      max = Math.max(max, dp[i][j])
    }
  }
  return max*max
};