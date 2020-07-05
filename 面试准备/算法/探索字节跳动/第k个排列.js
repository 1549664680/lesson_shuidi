// ## 思路
// 通过k确定在那个阶段，比如
// n=4 分为1到4开头的阶段，每个阶段有3!(6)种不同的排列
// k =16 = 6+6+4 在以2开头的第4个排列
// 然后在确定 1 3 4 三个数的第4种排列  这时候就相当于n = 3 k = 4

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  const fac = [0, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880]; // 0! 到 9! 其全排列数目 
  let res = '';
  let arr = [];
  //arr = [1, 2, 3, ..., n]
  for (let i = 1; i < n + 1; i++) {
      arr.push(i);
  }
  //通过foo不断获取排列的下一个数字，直到能直接获取后续数字
  const foo = (n, k) => {
      if (k === fac[n]) {  //k与n!相等，返回最后一个排列
          res += arr.reverse().join('');
      } else if (k === fac[n - 1]) {    // 如果 是前一个数的全排列数目，那么是以1开头的，也就是arr的第一个
          res += arr.shift();
          res += arr.reverse().join(''); // 第一个数打头，剩下的翻转接上
      } else {   
          let num = 0;    
          while (k > fac[n - 1]) { // k 如果小于前一个数的全排列数目，那么也是以1开头，num等于0
              k -= fac[n - 1];     // k 如果大于，那么看他在那个阶段，比如n为4，k为13，那么k等于 6+6=1 在第三阶段第一个数
              num++;               // num 取第几个阶段的开头数
          }
          res += arr[num];
          arr.splice(num, 1);  //从arr 里删除个开头数
          foo(n - 1, k);   // 确定在哪个阶段了，降一个维度
      }
  }
  foo(n, k);
  return res;
};