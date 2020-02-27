function ListNode(val){
  this.val = val;
  this.next = null;
}
const n1 = new ListNode(1)
const n2 = new ListNode(2)
const n3 = new ListNode(6)
const n4 = new ListNode(3)
const n5 = new ListNode(4)
const n6 = new ListNode(5)
const n7 = new ListNode(6)
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;
var removeElements = function(head, val) { //头结点 ， val 要移除的数
  //如果当前结点的下一个结点的值为val，就把next 指向next.next
  // 特例 第一个的值就为val 
  const dummy = { //哨兵结点 
    next:head
  }
  let cur = dummy;
  while(cur && cur.next){ //遍历 尾结点 少判断一次
    let next = cur.next
    if( next.val == val){
      cur.next = next.next;
    }
    if(next.val != val){
      cur = next;
    }
  }
  return dummy.next
};
console.log(removeElements(n1,6))