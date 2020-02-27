function ListNode(val){
  this.val = val
  this.next = null;
}
const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
const n5 = new ListNode(5);
n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
// var oddEvenList = function(head){
//   // 将奇偶结点分开放在两个数组中
//   // 奇数表的尾结点指向偶链表的头结点
//   // 这样的话 空间复杂度不是o(1) 不是原地
//   if (!head || !head.next){
//     return head
//   }
//   var odd = []; //奇数结点 放这里
//   var even = [] // 偶数结点
//   var f = true;  //奇偶标记变量
//   while(head){
//     var next = head.next
//     head.next = null //将原来的链关系打掉
//     if(f){
//       odd.push(head)
//     }else{
//       even.push(head); 
//     }
//     f = !f
//     head = next
//   }
//     for (var i = 0;i< odd.length-1;i++){
//       odd[i].next =odd[i+1]
//     }
//     for(var i = 0;i<even.length-1;i++){
//       even[i].next = even[i+1]
//     }
//     odd[odd.length-1].next = even[0];
//     return odd[0];
// }


// 刚刚那个不是原地 ，而原地没有两个数组可以用了 o(1)
// 哨兵结点
var oddEvenList = function(head){
  if(!head || !head.next) return head
  const dummyHead1 = {
    next:head
    // 没有val
  }
  const dummyHead2 = {
    next:head.next
  }
  let odd = dummyHead1.next;
  let even = dummyHead2.next;
  while(odd && odd.next && even && even.next){
    const oddNext = odd.next.next
    const evenNext = even.next.next
    odd.next = oddNext
    even.next = evenNext
    odd = oddNext;
    even = evenNext;
  }
  odd.next = dummyHead2.next
  return dummyHead1.next;
}
console.log(oddEvenList(n1))