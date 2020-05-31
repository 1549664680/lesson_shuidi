/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isSymmetric = function(root) {
//   const check = (left,right)=>{
//     if(!left && !right) return true
//     if(left && right){
//       return left.val === right.val &&
//        check(left.left,right.right) &&
//        check(left.right,right.left)
//     }
//     return false
//   }
//   return !root || check(root.left,root.right)
// };
var isSymmetric = (root) => {
  if (!root) return true
  let leftStack = []
  let rightStack = []
  let curLeft = root.left
  let curRight = root.right
  while(curLeft || curRight || leftStack.length || rightStack.length){
    while(curLeft){
      leftStack.push(curLeft)
      curLeft = curLeft.left
    }
    while(curRight){
      rightStack.push(curRight)
      curRight = curRight.right
    }
    if(leftStack.length !== rightStack.length) return false
    curLeft = leftStack.pop()
    curRight = rightStack.pop()
    if(curLeft.val !== curRight.val) return false
    curLeft = curLeft.right
    curRight = curRight.left
  }
  return true
}