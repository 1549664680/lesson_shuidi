/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
  // 1 1 2 3 4 5 6 7   8 9  10 11
  // 1 1 1 2 4 6 9 12 18 27 36 54
  // let res = [1,1,1,2,4,6,9]
  // if(n<=6){
  //     return res[n]
  // }
  // for(let i =7;i<=n;i++){
  //     res.push(res[i-3]*3)
  // }
  // return res[n]
  // // 从第七个开始都是有规律的每一个是前3的3倍
  if(n==2){return 1}
  if(n==3){return 2}
  let sum = 1;
  while(n>4){
    sum*=3
    n-=3
  }
  return sum*n
  // 以三为基础分是最大
  };