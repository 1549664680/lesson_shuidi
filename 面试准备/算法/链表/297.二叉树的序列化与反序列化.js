// DFS 深度优先索索
var serialize = function(root) {
  if(root === null )return "X,"
  const left = serialize(root.left)
  const  right = serialize(root.right)
  return root.val + ',' + left + right
};
const buildTree = (list)=>{
  const nodeVal = list.shift()
  if(nodeVal === 'X') return null
  const node = new TreeNode(nodeVal)
  node.left = buildTree(list)
  node.right = buildTree(list)
  return node
}
var deserialize = function(data) {
    const list = data.split(',')
    return buildTree(list)
};
// BFS 广度优先搜索
var serialize = function(root){
  let queue = [root]
  let res = []
  while(queue.length){
    let node = queue.shift()
    if(node){
      res.push(node.val)
      queue.push(node.left)
      queue.push(node.right)
    }else{
      res.push("X")
    }
  }
  return res.join(',')
}

var deserialize = function(data){
  if(data === "X") return null
  let list = data.split(",")
  let root = new TreeNode(list[0])
  let queue = [root]
  let cursor = 1
  while(cursor <list.length){
    let node = queue.shift()
    let left = list[cursor++]
    let right = list[cursor++]
    // cursor+=2
    if(left != 'X'){
      let leftNode = new TreeNode(left)
      node.left = leftNode
      queue.push(leftNode)
    }
    if(right != 'X'){
      let rightNode = new TreeNode(right)
      node.right = rightNode
      queue.push(rightNode)
    }
  }
  return root
}