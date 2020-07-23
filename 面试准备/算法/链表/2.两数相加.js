/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 使用变量存储位数和
  var addTwoNumbers = function(l1, l2) {
    let carry = 0
    const dummy = new ListNode()
    let pointer = dummy
    while (l1 || l2 || carry) {
      const num1 = l1 ? l1.val : 0
      const num2 = l2 ? l2.val : 0
      const sum = num1 + num2 + carry
      if (sum > 9) {
        pointer.next = new ListNode(sum % 10)
        carry = 1
      } else {
        pointer.next = new ListNode(sum)
        carry = 0
      }
      if (l1) l1 = l1.next
      if (l2) l2 = l2.next
      pointer = pointer.next
    }
    return dummy.next
  };
