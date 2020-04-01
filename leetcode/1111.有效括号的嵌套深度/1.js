var maxDepthAfterSplit = function(seq) {
  // var max = 0;
  // var arr = [];
  // var deep = 0;
  // for (var i = 0; i < seq.length; i ++){
  //   if(seq[i] == "("){
  //     deep ++ 
  //   } 
  //   max = Math.max(max, deep)
  //   arr[i] = deep
  //   if(seq[i] == ")"){
  //     deep --
  //   }
  // }
  // // console.log(max,arr)
  // return arr.map(item => item>max>>1?1:0)
  return seq.split("").map((value, index) => index & 1 ^ (value === '('));
  // & 与操作 都为1取1
  // ^ 异或操作 相等取0 不等取1
};
console.log(maxDepthAfterSplit("()(((())))()"))