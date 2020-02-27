var myAtoi = function(str) {
  str = str.trim(); // trim()函数 删除首部尾部的空格
  if(!/^[+|-]?\d+/.test(str)) return 0;
  // ^ 匹配输入字符串的开始位置 
  // ? 前面的字符最多出现一次
  // \d 所有数字字符
  // + 匹配一个或多个
  let val = parseInt(str.match(/^[+|-]?\d+/));
  let base = Math.pow(2,31)
  let min = -base;
  let max = base-1;
  return Math.max(Math.min(val, max), min)
};
console.log(myAtoi('-16d1'))