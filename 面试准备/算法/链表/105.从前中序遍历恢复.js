/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  // if(preorder.length === 0){
  //   return null;
  // }
  // let root = new TreeNode(preorder[0])
  // let index = inorder.findIndex(item =>item===preorder[0])
  // let leftinorer = inorder.slice(0,index)
  // let rightinorder = inorder.slice(index+1)
  // let leftpreorder = preorder.slice(1,1+leftinorer.length)
  // let rightpreorder = preorder.slice(1+leftpreorder.length)
  // if(leftinorer.length === 1){
  //   root.left = new TreeNode(leftinorer[0])
  // }else{
  //   root.left = buildTree(leftpreorder,leftinorer)
  // }
  // if(rightinorder.length === 1){
  //   root.right = new TreeNode(rightinorder[0])
  // }else{
  //   root.right = buildTree(rightpreorder,rightinorder)
  // }
  // return 
  if(!preorder.length || !inorder.length ){
    return null
  }
  let root = new TreeNode(preorder[0])
  let index = inorder.findIndex(item => item===preorder[0])
  root.left = buildTree(preorder.slice(1,1+index),inorder.slice(0,index))
  root.right = buildTree(preorder.slice(index+1),inorder.slice(index+1))
  return root
};