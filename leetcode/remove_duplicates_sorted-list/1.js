var removeDuplicates = function(nums){
  const size = nums.length;
  let slowP = 0; //慢指针
 for(let fastP = 0;fastP < size; fastP++){//慢指针
  // console.log(nums[fastP])
  if (nums[fastP] !== nums[slowP]){
    slowP++;//不一样
    nums[slowP] = nums[fastP]//设置每个位置
  }
 }
 return slowP + 1
}
console.log(removeDuplicates([1,1,2,1,2]))