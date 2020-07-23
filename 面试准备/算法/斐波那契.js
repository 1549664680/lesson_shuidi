// 递归  性能不好
var fib = function(N){
  if(N == 0)return 0;
  if(N == 1) return 1;
  return fib(N-1) + fib(N - 2)
}
// dp   空间大，一个N长的数组
var fib = function(N){
  let res = [0,1]
  for(let i=2;i<=N;i++){
    res[i] = res[i-1] + res[i - 2]
}
return res[N]
}
// 空间优化
var fib = function(N) {
  let a = 0;
  let b = 1;
  if(N==0){
      return a
  }
  if(N==1){
      return b
  }
  let res;
  for(let i=2;i<=N;i++){
      res = a+b
      a = b
      b = res
  }
  return res
};

// 公式 
var fib = function(N) {
  return (5**0.5)*0.2*( ((1+5**0.5)/2)**N-((1-5**0.5)/2)**N)
};