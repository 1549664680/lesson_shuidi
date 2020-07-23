/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head){
  if(!head || !head.next){
     return head; //空链表， 或只有一个节点
  }
  let cur = head;//当前节点
  let pre = null;// 前驱节点
  while(cur){
    // 遍历节点
    const  next = cur.next; //后继节点
    cur.next = pre; // 反过来 将当前节点的指针指向前一个节点
    pre = cur; // 前驱节点变成当前节点
    cur = next; //后继节点变成当前节点
    
  }
  return pre
}
