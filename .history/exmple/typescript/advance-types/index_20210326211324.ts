
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }


 function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
   let l3:ListNode = new ListNode()
   while(l1?.next!=null || l2?.next != null){
     let item = new ListNode()
     if(l1.val <= l2.val){
       item.val = l1.val 
       l1 = l1.next
     }else{
      item.val = l2.val 
      l2 = l2.next
     }
     l3.next = item
   }
   return l3.next
};

const l1 = new ListNode(1)