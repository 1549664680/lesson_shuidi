/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {LinkdeList} l1
 * @param {LinkdeList} l2
 * @return {LinkdeList}
 */
function LinkList() {
    let Node = function(data) {
        this.data = data
        this.next = null
    }
    let length = 0   // 链表长度 
    let head = null  // 头节点
    let tail = null  // 尾节点
}
var l1 = new LinkList();
for(var i=0;i<4;i++){
    var new_node = new Node(i);
    l1.head=new_node;
    
}
// var addTwoNumbers = function(l1, l2) {
//     let p1 = l1
//     let p2 = l2
//     let carry = 0
//     const dummy = new Node()
//     let pointer = dummy
    
//     while (p1 || p2 || carry) {
//       console.log(carry)
//       const num1 = p1 ? p1.val : 0
//       const num2 = p2 ? p2.val : 0
//       const sum = num1 + num2 + carry
//       if (sum > 9) {
//         pointer.next = new Node(sum % 10)
//         carry = 1
//       } else {
//         pointer.next = new Node(sum)
//         carry = 0
//       }
//       if (p1) p1 = p1.next
//       if (p2) p2 = p2.next
//       pointer = pointer.next
//     }
//     return dummy.next
//   };
//   console.log(addTwoNumbers())