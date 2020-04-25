var nextPermutation = function(nums) {
  let res = new Array().concat(nums)
  nums = new Array(1).fill(res[0]).concat(res.slice(1,res.length).sort((a,b)=>b-a))
  // slice 是坐标 splice  是个数 并且改变数组
  if(nums.toString(nums) == res.toString()){
    nums.sort((a,b)=>a-b)
  }
  console.log(nums)
};
nextPermutation([1,2,3])