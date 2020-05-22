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
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) {
      return null
  }
  // 通过前序遍历的数组找到子树的根节点
  var root = new TreeNode(preorder[0])
  // 找到中序遍历的数组根节点在的位置
  // 根节点左边的数为根节点的左树
  // 根节点右边的数为根节点的右树
  var index = inorder.findIndex(item => item === preorder[0])
  // 左子树的中序遍历数组
  var leftInorderList = inorder.slice(0, index)
  // 左子树的前序遍历数组
  var leftPreorderList = preorder.slice(1, 1 + leftInorderList.length)
  // 右子树的中序遍历数组
  var rightInorderList = inorder.slice(index + 1)
  // 右子树的前序遍历数组
  var rightPreorderList = preorder.slice(1 + leftPreorderList.length)
  // 如果左子树的中序遍历数组长度为1
  // 说明已经是该子树最后一个节点了
  if (leftInorderList.length === 1) {
      root.left = new TreeNode(leftInorderList[0])
  } else {
      // 将当前左子树再拆分成左子树和右子树
      root.left = buildTree(leftPreorderList, leftInorderList)
  }
  // 如果右子树的中序遍历数组长度为1
  // 说明已经是该子树最后一个节点了
  if (rightInorderList.length === 1) {
      root.right = new TreeNode(rightInorderList[0])
  } else {
      // 将当前右子树再拆分成左子树和右子树
      root.right = buildTree(rightPreorderList, rightInorderList)
    }
    return root
};