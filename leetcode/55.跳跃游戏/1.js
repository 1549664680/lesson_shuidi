// var canJump = function(nums) {
//   if(nums.length === 1){
//     return true
//   }
//   let site = 0;
//   let i = 0  
//   while(i < nums.length -1){
//     if(i+nums[i] >= nums.length-1){
//       return true
//     }
//     if(nums[i] === 0){
//       return false
//     }
//     let max = nums[site] + site;  
//     site = i + nums[i]

//     for (let j = i+1; j < i + nums[i]; j++){
//       if(nums[j]+j>max){
//         site = j;
//         max = nums[j]+j
//       }
//     }
//     // console.log(site,'=')
//     i = site
//   }
//   return false
// };
var canJump = function(nums) {
  //换一种思路，计算出该路线能到的最远距离，判断最远的距离是否超过了该路径或者刚好到达终点
  //每一次都计算当前位置以及以前能走到的最远距离（贪心）
  let maxDistance = 0;
  const len = nums.length;
  for(let i = 0; i < len; i ++) {
      if(nums[i] === 0 && maxDistance <= i) break;//如果当前位置值为0，且当前能到达的最远距离还小于等于这个位置，那么它已经走不到后面了，直接退出循环就好了
      if(i + nums[i] > maxDistance) maxDistance = i + nums[i];
  }
  return maxDistance >= len- 1;
}
console.log(canJump([5,9,3,2,1,0,2,3,3,1,0,0]))