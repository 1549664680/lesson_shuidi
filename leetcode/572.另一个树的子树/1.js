/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  //1.遍历s的所有节点，看那个节点和t的根节点相等
  //2.相等则继续遍历下去，匹配余下节点，知道t树遍历完
  if(!s&&t){
      return false;
  }
   let linkNode = function(node,target){
       if(!node&&target)return false;
       if(node&&!target)return false;
       if(!node&&!target) return true
       if(node.val===target.val){
           return linkNode(node.left,target.left)&&linkNode(node.right,target.right)
       }else{
           return false
       }
   }
 return linkNode(s,t)||isSubtree(s.left,t)||isSubtree(s.right,t)
};
// var isSubtree = (s, t) => (JSON.stringify(s).indexOf(JSON.stringify(t)))>-1?true:false