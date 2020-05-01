// var mergeTwoLists = function (l1, l2) {
//   if (l1 === null)
//     return l2 === null? null : l2;
//   if (l2=== null)
//     return l1=== null ? null : l1;
//   let res = []
//   while (l1) {
//     res.push(l1.val)
//     l1 = l1.next
//   }
//   while (l2) {
//     res.push(l2.val)
//     l2 = l2.next
//   }
//   res.sort((a, b) => a - b)
//   let nodelist = new ListNode(res[0])
//   let head = nodelist
//   for (let i = 1; i < res.length; i++) {
//     let node = new ListNode(res[i])
//     nodelist.next = node
//     nodelist = nodelist.next
//   }
//   return head
// };
var mergeTwoLists = function (l1, l2) {
  if (l1 === null)
    return  l2;
  if (l2 === null)
    return l1;
  if(l1.val <= l2.val){
    l1.next = mergeTwoLists(l1.next,l2)
    return l1
  }else{
    l2.next = mergeTwoLists(l1,l2.next)
    return l2
  }
}