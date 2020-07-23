/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head) return head;
  let len = 0;
  let left = head
  while(left&&left.next){
    len++
    left = left.next
  }
  left.next = head
  k = k%(len+1)
  let pre = head
  let i = (len+1) -k
  while(--i){
    pre = pre.next
  }
  let res = pre.next
  pre.next = null
  return  res
};