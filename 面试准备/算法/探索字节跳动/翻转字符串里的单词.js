// 给定一个字符串，逐个翻转字符串中的每个单词。
// 示例 1

// 输入: "the sky is blue"
// 输出: "blue is sky the"
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s = s.trim().split(' ').reverse().filter(item => !!item).join(" ")
  // console.log(s)
  return s
};
// 这题感觉就是对字符串的一些函数考察
reverseWords("a good   example")