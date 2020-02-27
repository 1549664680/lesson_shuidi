var maxArea = function(height) {
    // 暴力法
    // var maxArea = 0;
    // var len = height.length
    // for(var i = 0 ; i<len ;i++ ){
    //   for(var j = i+1; j < len; j++){
    //     maxArea = Math.max(maxArea,Math.min(height[i],height[j])*(j-i))
    //   }  
    // }
    // return maxArea;

    // 双指针法，从两端开始
    var maxArea = 0;
    var len = height.length;
    var n = 0, m = len - 1
    while( n < m){
      maxArea = Math.max(maxArea,Math.min(height[n],height[m])*(m-n))
      if(height[n] <= height[m]){
        n++
      }else {
        m--
      }
    }
    return maxArea

};
console.log(maxArea([1,8,6,2,5,4,8,3,7]))