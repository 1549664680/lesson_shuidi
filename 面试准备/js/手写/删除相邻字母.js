// 算法题，abbbaca => aaca => ca
function removeDuplicates(str){
  str = str.split('')
  let left = 0
  let right = 1  // 弄两个指针，从第一个，第二个开始
  while(left<str.length){ 
    if(str[right] != str[left]){ // 前后两个不相等时
      if(right - left >1){   // right已经向后走过几步了 比如aab right从第二个a走到b了
        str.splice(left,right-left)  // 切除掉重复的
        if(left === 0){    // left是从0开始，也就是说从0开始的前几个相等
          right = left +1  // right 又从left后一个开始
        }else{      // left不是从第一个开始的 比如 abba,前两个不相等left right都加过一了
          left--    // 这部分重复的删除了，left退后一步， 之所以要区分left是不是从0开始，因为万一从零开始，减一就变为负数了
          right = left + 1 
        }
      }else{  // 相减不大于1，说明挨在一起的两个不相等，都加一吧，往后找相同的
        left++
        right++
      }
    }else{ // 前后两个相等了，那right加一，再向后找
      right++
    }
  }
  return str.join('')
}
console.log(removeDuplicates('abbbaca'))