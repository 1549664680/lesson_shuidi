var isRectangleOverlap = function(rec1, rec2) {
  return !(rec1[2] <= rec2[0] ||   
    rec1[3] <= rec2[1] ||   
    rec2[2] <= rec1[0] ||  
    rec2[3] <= rec1[1]);    
}
console.log(isRectangleOverlap(
  [8,18,5,15],
  [0,3,7,9]))