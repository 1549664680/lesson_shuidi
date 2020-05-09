var mySqrt = function(x) {
  if(x == 0|| x== 1){
    return x;
  }
  let left = 1;
  let right = x;
  while(left <= right){
    let mid = left + ((right-left)>>1)
    if(mid*mid == x){
      return mid
    }else if(mid*mid > x){
      right = mid-1
    }else{
      left = mid +1
    }
  }
return right
};