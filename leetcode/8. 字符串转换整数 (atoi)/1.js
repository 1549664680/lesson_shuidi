const myAtoi = function(str) {
  // 提取需要的字符
  const result = str.trim().match(/^[+|-]?\d+/g);
  console.log(result)
  return result? Math.max(Math.min(Number(result[0]), 2 ** 31 - 1), -(2 ** 31)): 0;
};
console.log(myAtoi(" with 4193words "))