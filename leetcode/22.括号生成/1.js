var generateParenthesis = function(n) {
 let res = []
  const help = (cur, left, right) => {
   if (cur.length === 2 * n) {
     res.push(cur)
     return
   }
   if(left<n){
     help(cur + "(", left + 1, right)
   }
   if(right<left){
     help(cur + ")", left, right + 1)
   }
 }
  help("", 0, 0)
 return res
};
// 从左边开始，左括号数量是一直大于右括号的，当右括号小于左括号都是，加个“）”,rigth加一
// 左括号小于n 时，加“（” 数量加一
console.log(generateParenthesis(3))