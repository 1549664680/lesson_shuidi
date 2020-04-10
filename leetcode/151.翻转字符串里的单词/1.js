var reverseWords = function(s) {
  // return s.trim().split(' ').reverse().filter((s)=>{return s}).join(' ')
  return s.split(' ').reverse().filter(s=>s).join(' ')
};
// 首位空字符可以不理会，后面会过滤掉。
  console.log(reverseWords("a good   example"))