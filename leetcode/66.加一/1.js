// var plusOne = function(digits) {
//   let res = digits[digits.length-1]+=1
//   let i = digits.length-1
//   let temp = new Array(1).fill(1)
//   while(res == 10){
//     digits[i] = 0
//     if(i === 0){
//       digits = temp.concat(digits)
//     }else{
//       digits[i-1] +=1
//     }
//     res = digits[i-1]
//     i--
//   }
//   console.log (digits)
//   // return digits
// };
var plusOne = function(digits) {
  let res = BigInt(digits.join(''))+1n
  return ( res.toString().split("").map(Element => Number(Element)))
};
plusOne([9])