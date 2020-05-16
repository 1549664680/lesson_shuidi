function ListNode(val){
  this.val = val;
  this.next = null;
}
const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
const n5 = new ListNode(5);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

var reverseKGroup = function(head, k) {
  if(!head || k == 1) return head;
  var dummy = { //哨兵结点
    next:head
  }
  var pre = dummy; //翻转链表的前一个结点
  var end = dummy; //翻转链表的最后一个结点
  while( end.next != null){
    for(var i=0;i<k&&end!=null;i++) end = end.next
    if(end == null) break;
    var start = pre.next;  // 翻转链表的开始结点
    var next = end.next; // 翻转链表之后的第一个结点
    end.next = null; // 翻转链表的最后一个结点的next赋值为null
    pre.next = reverse(start) // 翻转链表
    start.next = next  // 接上翻转链表之后的链表
    pre = start; 
    end = start
  }
  return dummy.next
};
var reverse = function(start){
  var pre = null; // 前一个结点
  var curr = start; // 当前结点
  while(curr != null){ 
    var next = curr.next;  // 下一个结点
    curr.next = pre  // 下一个结点赋值为上一个结点
    pre = curr;  // 上一个结点变为当前结点
    curr = next; // 遍历
  }
  return pre
}
console.log(reverseKGroup(n1,2))