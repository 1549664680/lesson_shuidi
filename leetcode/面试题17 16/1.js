var massage = function(nums) {
  let a = 0, b = 0 
  for (let i = 0; i < nums.length; i++) {
    let c = Math.max(b, a + nums[i]) 
    console.log("第",i,"次",a,b)
        a = b
        b = c
  }
  console.log(b)
  return b
}
         1,5,7,9,16,16,20,20,21,25
massage([1,5,6,4,9,3,4,1,5,2])
// a 相当于之前最大的
// b 相当于现在最大的 
// 之前最大的a加上nums[i]  与 现在 最大的b相比较 