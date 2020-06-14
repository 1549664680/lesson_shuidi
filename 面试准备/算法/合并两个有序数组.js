/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
  let k = m+n-1
  let i = m-1
  let j = n-1
  while(j>=0){
    if(B[j]<A[i]){
      A[k] = A[i]
      i--
      k--
    }else{
      A[k] = B[j]
      j--
      k--
    }
  }
};
// 思路 ，A的最后一个与B的最后一个比较，谁大放后面
// 随之k从最后一位往前移，表示处理了一位了
// 如果小B的大，那么B的元素往后面放