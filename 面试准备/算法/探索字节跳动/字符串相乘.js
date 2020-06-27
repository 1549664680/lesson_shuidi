/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if(num1 === '0'||num2 === '0'){return '0'} // 对0做处理
  let len1 = num1.length,len2=num2.length;
  let arr = new Array(len1+len2).fill(0) // 开辟额外的数组
  for(let i=len1-1;i>=0;i--){
    for(let j=len2-1;j>=0;j--){
      arr[i+j+1] = num1[i] * num2[j] + arr[i+j+1] //每次乘完，加上原有的
    }
  }
//       1   2   3
//   乘  4   5   6
// ————————————————————
//       6   12  18
//    5  10  15
// 4  8  12
// ————————————————————
// 4  13 28  27  18   --->arr

  let yu; // 余数
  let jin = 0; // 进位的数 初始值为0 因为一开始不需要进位
  for(let i=arr.length-1;i>=0;i--){
    arr[i]+=jin    // 先加上前面的数提交的进位
    yu = arr[i]%10  // 算出余数
    jin = (arr[i]-yu)/10 // 算出需要提交的进位s
    arr[i] = yu  // 保留余数就行
  }
  if(arr[0] === 0){   // 除去第一个0 三位数乘以二位数，顶多有五位数，至少四位数，所以判断第一个为不为0
    arr = arr.slice(1)
  }
 return arr.toString().split(',').join('') //字符串化
};
console.log(multiply("0","456"))