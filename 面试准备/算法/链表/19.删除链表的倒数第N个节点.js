/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let first = head;
  let second = head; // 双指针法
  while(--n){ // 先让first跑n步
    first = first.next
  }
  if(!first.next){ // 判断n是不是删除的第一个，那么first就来到了最后，那直接返回head.next 第一个就删除了
    return head.next
  }
  first = first.next
  while(first&&first.next){//一起走几步
    second = second.next
    first = first.next
  }
  second.next = second.next.next
  return head
};