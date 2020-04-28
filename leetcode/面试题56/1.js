// var singleNumbers = function (nums) {
//   nums.sort((a, b) => a - b )
//   let res = new Array(1).fill(nums[0])
//   for (let i = 1; i < nums.length; i++) {
//     if(nums[i] === res[res.length-1]){
//       res.pop()
//     }else{
//       res.push(nums[i])
//     }
//   }
//   return res
// };
     // 按位与运算 &  相同为1，相异为0。
    // 按位或     |  有一为1
    // 按位异或   ^  相同为0，相异为1
var singleNumbers = function (nums) {
  let mask = 0
  for (let num of nums) {
    mask ^= num
    console.log(mask)
  }
  console.log(mask)
}
console.log(singleNumbers([4,1,4,6]))