// var subarraySum = function (nums, k) {
//   let count = 0
//   let len = nums.length
//   let list = new Array(len + 1).fill(0)
//   list[0] = 0
//   for (let i = 0; i < len; i++) {
//     list[i + 1] = list[i] + nums[i]
//   }
//   for (let i = 0; i < len; i++) {
//     for (let j = i; j < len; j++) {
//       if(list[j+1]-list[i] === k){
//         count++
//       }
//     }
//   }
//   return count
// };
let subarraySum = function (nums, k) {
  let map = new Map([[0, 1]]);
  let sum = 0;
  let ans = 0;
  for (let num of nums) {
      sum += num;
      ans += map.get(sum - k) || 0;
      map.set(sum, (map.get(sum) || 0) + 1);
  }
  return ans;
}