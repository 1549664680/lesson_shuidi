/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root){
    return []
  }
  let res = [];
  let i = 0;
  function find(node,i){
    let temp = []
    temp.push(node.val)
    res[i] = res[i]?res[i].concat(temp):temp
    if(node.left){
      find(node.left,i+1)
    }
    if(node.right){
      find(node.right,i+1)
    }
  }
  find(root,i)
  return res
};