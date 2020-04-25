var permute = function (nums) {
  let list = []; // 中间数组
  let res = [] // 结果数组
  function backtrack(res, list, nums) {
    // 中间数组list的长度等于nums，那么就是有一个排列了，push到res中
    if (list.length === nums.length) return res.push([...list])
    for (let i = 0; i < nums.length; i++) {
      if(list.includes(nums[i])){continue} // 判断当前数组中是否有这个数，有就不做后面的事
      list.push(nums[i])  // list 每加一个不重复的数，就调用一次backtrack
      backtrack(res,list,nums)  // 当这一次的backtrack中的list长度等于nums时，return，来到list.pop()
      list.pop()
    }
    /*
    
    */ 
  }
  backtrack(res,list,nums)
  return res
};
console.log(permute([1,2,3]))