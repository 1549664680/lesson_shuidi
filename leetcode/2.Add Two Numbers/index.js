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
function LinkedList () {
     ListNode = function (element) {
        this.element = element;
        this.next = null; //指向链表中下一个节点项的指针
    };
}
function append(list,arr){
    var l1 = list
    l1.element=arr[0]
    for(var i=1;i<arr.length;i++){
        var node = new ListNode(arr[i]),current
        while(l1.next){
            l1 = l1.next
        }
         l1.next = node
        }
}
function print(list){    
while(list){
    console.log(list.element)   
    list= list.next
}
}

var l1 = new LinkedList(),
    l2 = new LinkedList(),
    l3 = new LinkedList() 
var arr1 = [2,4,3]
var arr2 = [5,6,4]
append(l1,arr1)
append(l2,arr2)

var addTwoNumbers = function(lista,listb,listc) {
    var l3 = listc,
        l1 = lista,
        l2 = listb
    var carry = 0 
    while(l1 || l2 || carry){
        const num1 = l1 ? l1.element : 0
        const num2 = l2 ? l2.element : 0
        var sum = num1 + num2 + carry
        var arr = [sum>9?sum%10:sum]
        carry = sum>9?1:0
        l3.next = new ListNode(arr)
        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
        l3 = l3.next
    }
}

addTwoNumbers(l1,l2,l3)
print(l3)
