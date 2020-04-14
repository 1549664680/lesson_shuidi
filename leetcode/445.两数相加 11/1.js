var addTwoNumbers = function(l1, l2) {
  var a1=[]
  var a2=[]
  while(l1){
    a1.push(l1.val)
    l1=l1.next
  }
  while(l2){
    a2.push(l2.val)
    l2=l2.next
  }
  var res=[0]
  for(var i=a1.length-1,j=a2.length-1,k=0;i>=0||j>=0;k++,i--,j--){
    var num1= (i>=0)?a1[i]:0
    var num2= (j>=0)?a2[j]:0
    var a=num1+num2+res[k]
    res[k]=a%10
    res[k+1]=a/10|0
  }
  var start=new ListNode(res[res.length-2])
  var node1=start
  for(var i=res.length-3;i>=0;i--){
    var node=new ListNode(res[i])
    node1.next=node
    node1=node1.next
  }
  if(res[res.length-1]!=0){
    var node2=new ListNode(res[res.length-1])
    node2.next=start
    return node2
  }
  return start
};
