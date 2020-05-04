var jump = function(nums) {
  let steps = 0;
  let lastjump = 0;
  let maxjump = 0;
  for(let i=0;i<nums.length-1;i++){
    maxjump = Math.max(maxjump,i+nums[i])
    if(lastjump === i){
      lastjump = maxjump
      steps++
    }
    if(lastjump >=nums.length-1){
      break
    }
  }
  return steps
};