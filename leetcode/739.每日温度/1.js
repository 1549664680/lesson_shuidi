/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  let Tlen = T.length
  let res = new Array(Tlen).fill(0)
  for(let i = 0;i<Tlen;i++){
    for(let j = i+1;j<Tlen;j++){
      if(T[j]>T[i]){
        res[i] = j-i
        break;
      }
    }
  }
  return res
};