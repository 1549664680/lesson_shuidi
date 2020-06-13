var climbStairs = function(n) {
  if(n<2){
      return n
  }
  let i1 = 1;
  let i2 = 2;
  let temp
  for(let i = 3;i<=n;i++){
      temp = i1+i2
      i1 = i2
      i2 = temp
  }l
  return i2
};
// 典型的斐波那契数列