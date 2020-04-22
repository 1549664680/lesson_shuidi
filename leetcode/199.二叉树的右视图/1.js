var rightSideView = function (root) {
  if (!root)
    return []
  let arr = []
  let res = []
  arr.push(root) 
  // 第一个结点push进去, 或者说第一层push进去
  while (arr.length > 0) {
    res.push(arr[arr.length - 1].val)
    // 把这一层的最后一个数push到结果中
    var len = arr.length
    while (len > 0) { // 对这一层进行循环
      var now = arr.shift() 
      if (now.left != null) // 不为空的结点就push到arr中
        arr.push(now.left) //那么arr的最后一个数，就是我们从右边看到的第一个数
      if (now.right != null)
        arr.push(now.right)
      len--
    }
  }
  return res
};