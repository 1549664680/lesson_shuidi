/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  nums1 = nums1.concat(nums2).sort((a,b)=>a-b)
  let len = nums1.length
  if(len %2 !== 0){
    return nums1[len>>1]
  }else{
    return (nums1[len>>1]+nums1[(len-1)>>1])/2
  }
};