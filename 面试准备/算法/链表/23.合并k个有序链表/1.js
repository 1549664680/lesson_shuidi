/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length == 0)
    return null;
  if (lists.length == 1)
    return lists[0];
  let res = []
  lists.forEach(list => {
    while (list) {
      res.push(list.val)
      list = list.next
    }
  })
  if(res.length === 0){
    return null
  }
  res.sort((a, b) => a - b)
  let nodelist = new ListNode(res[0])
  let head = nodelist
  for (let i = 1; i < res.length; i++) {
    let node = new ListNode(res[i])
    nodelist.next = node
    nodelist = nodelist.next
  }
  return head
};