/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if(!headA || !headB){return null}
  let A = headA,B = headB
  while(A != B ){
      A = A?A.next:headB
      B = B?B.next:headA
  }
  return A
};