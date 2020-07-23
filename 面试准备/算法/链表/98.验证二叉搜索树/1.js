var isValidBST = function (root) {
  let arr = []
  let preOrder = function(root) {
    if (root) {
      preOrder(root.left)
      arr.push(root.val)
      preOrder(root.right)
    }
  }
  preOrder(root)

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i+1]) {
      return false
    }
  }

  return true
};