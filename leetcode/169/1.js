var majorityElement = function(nums){
  let count = 1,//次数的计数
  majority = nums[0]; // 假设第一个数是majority
  for(let i = 1 ; i< nums.length;i++){
    // 是这个数 count++
    // 不是 count--
    // count小于0 说明不是这个数 重新复制
    if(count == 0){
      majority = nums[i];
    }
    if( nums[i] === majority){
      count++
    }else{
      count--;
    }
  }
  return majority
}
console.log(majorityElement([6,5,5]))