var search = function(nums, target) {
  if (!nums || nums.length === 0) return -1;
  let start =0;
  let end = nums.length -1;
  let mid;
  while(start<=end){
    mid = Math.floor((start+end)/2)
    if(nums[start] === target){return start}
    if(nums[mid] === target) {return mid}
    if(nums[end] === target){return end}
    if(nums[start] < nums[mid]){
      if(target > nums[start] && target <nums[mid]){
        end= mid-1
      }else{
        start = mid+1
      }
    }else{
      if(target > nums[mid] && target <nums[end]){
        start = mid +1
      }else{
        end = mid -1
      }
    }
  }
  return -1
};