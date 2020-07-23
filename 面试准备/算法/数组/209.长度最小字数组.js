/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if(nums.length === 0){return 0}
    let left=0,right=-1; // 移动窗口边界
    let sum = 0; // 窗口中的数总和
    let min = nums.length // 最小长度
    while(1){  // 一直循环，直到找到为止 
        if(sum<s){ // sum小于s的话，窗口就一直向右扩展，sum也随之更新
            sum+=nums[++right]
            if(right === nums.length - 1 && sum<s){return min === nums.length?0:min} 
            // 如果right到了最边上，sum还是小于s， 此时有两种情况，一是找不到最小长度，
            // 二是之前找到过，后来窗口移动走了，导致sum不符合条件，那么输出之前找到的min
        }else{// 如果sum符合条件了
            if((sum-nums[left])>=s){ //从左边开始缩减窗口 ，更新sum
                sum-=nums[left++]
            }else{ // 如果不能缩减，也就是sum减去最左边的数，导致sum小于s
                if(right >= nums.length -1){return min}  // 判断一下right是不是来到了最右边，如果是 返回min
                sum = sum + nums[++right] - nums[left++] // 向右移动窗口 ，更新sum
            }
            min = Math.min(min,right - left + 1)    // 计算最小值
        } 
    }
};
// 111111111
// 222222222
// 333333333
// 444444444
// 555555555
// 666666666
// 777777777
// 888888888

// 8 9 