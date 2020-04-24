/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  var n = word1.length;
  var m = word2.length;
  var minDist = Number.MAX_SAFE_INTEGER;
  function helper(i,j,edist){
      // terminator
      if(i == n || j == m){
          // 没有剩余字符的单词要加上有剩余字符单词的剩余字符个数
          if(i < n){
              edist+=(n-i);
          }
          if(j < m){
              edist+=(m-j);
          }
          minDist = Math.min(edist,minDist);
          // console.log(minDist)
          return;
      }
      if(word1[i] == word2[j]){   // 相同的话都往前走一步，步数也不变
          helper(i+1,j+1,edist);
      }else{
        // 删除a[i] 或 b[j]前添加一个字符
        helper(i+1,j,edist+1);
        // 删除b[j] 或 a[i]前添加一个字符
        helper(i,j+1,edist+1);
        // 将a[i]和b[j]替换为相同字符
        helper(i+1,j+1,edist+1);
      }
  }
  helper(0,0,0);
  return minDist;
};
console.log(minDistance("mitcmu","mtacnu"))
/// 递归回溯， 结果超时