/* function MountainArray() {
  *     @param {number} index
  *     @return {number}
  *     this.get = function(index) {
  *         ...
  *     };
  *
  *     @return {number}
  *     this.length = function() {
  *         ...
  *     };
  * };
  */
 var findInMountainArray = function (target, mountainArr) {
  let left = 0;
  let rigth = mountainArr.length() - 1;
  let heigth;
  while (left < rigth) {
    let mid = left + ((rigth - left) >> 1)
    let midnum = mountainArr.get(mid)
    if (midnum >= mountainArr.get(mid + 1)) {
      rigth = mid
    } else {
      left = mid + 1
    }
  }
  heigth = left
  left = 0, rigth = heigth - 1
  while (left<=rigth){
    let mid = left + ((rigth - left) >> 1)
    let midnum = mountainArr.get(mid)
    if(midnum === target)return mid
    if(midnum<target){
      left = mid +1
    }else{
      rigth = mid -1
    }
  }
  if (mountainArr.get(heigth) === target) return heigth;
  left = heigth+1,rigth = mountainArr.length()-1
  while (left<=rigth){
    let mid = left + ((rigth - left) >> 1)
    let midnum = mountainArr.get(mid)
    if(midnum === target)return mid
    if(midnum<target){
      rigth = mid -1
    }else{
      left = mid +1
    }
  }
  return -1
};