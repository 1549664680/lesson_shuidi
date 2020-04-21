// var numberOfSubarrays = function(nums, k) {
//   let numodd = 0;
//   let numslen = nums.length
//   for (let i = 0; i < numslen; i++){ 
//     if(nums[i]%2!=0){
//       nums[i] = '#'
//     }
//   }
//   // console.log(nums)
//   for (let i = 0; i <= numslen-k; i++){ 
//     for (let j = 0; j < numslen - k; j++){
//       if(i+k+j<=10){
//         console.log(nums.slice(i,i+k+j),i,i+k+j)
//         let list = nums.slice(i,i+k+j).toString().match(new RegExp('#','g'))
//         // console.log(list)
//         numodd += (list?list.length:0) >= k?1:0
//       }
//     }
//   }
//   return numodd
// };
var numberOfSubarrays = function(nums, k) {
  let numodd = 0;
  let numslen = nums.length
  let count = new Array(numslen+1).fill(0).fill(1,0,1)
  // 将第一个count[0] 赋值为1 ，是为了 但奇数数量恰好出现k次时，需要加上奇数出现0次的数量，也就是一
  let oddcount = 0;
  for (let i = 0; i < numslen; i++){ 
      //记录当前的奇数数量
      oddcount +=nums[i] & 1
      // 如果当前数量达到了大于等于k ，那结果就加上 奇数出现 当前数量减去k时的次数
      // 例如当前的addcount= 4 那么它就达到了大于等于k=3，但是题目要求恰好k=3,
      // 那结果就是加上 addcount-k=1  也就是奇数数量为一时出现的次数
      numodd +=oddcount>=k?count[oddcount - k] : 0
      count[oddcount] +=1
  }
  return numodd
};
console.log(numberOfSubarrays([1,1,2,1,1],
  3)) 
     // 按位与运算 &  相同为1，相异为0。
    // 按位或     |  有一为1
    // 按位异或   ^  相同为0，相异为1