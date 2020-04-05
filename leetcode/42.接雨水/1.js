var trap = function(height) {
  let max = 0;
  let volumn = 0;
  const leftMax = [];
  const rightMax = [];

  for(let i = 0; i < height.length; i++) {
      leftMax[i] = max = Math.max(height[i], max);
  }
  console.log(leftMax)
  max = 0;

  for(let i = height.length - 1; i >= 0; i--) {
      rightMax[i] = max = Math.max(height[i], max);
  }
  console.log(rightMax)
  for(let i = 0; i < height.length; i++) {
      volumn = volumn +  Math.min(leftMax[i], rightMax[i]) - height[i]
  }

  return volumn;
};
//建模 h[i] = Math.min(左边柱子最大值, 右边柱子最大值)(h为下雨之后的水位)

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))