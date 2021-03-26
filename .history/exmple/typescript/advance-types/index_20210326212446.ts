
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
   while(l1 && l2){
     console.log('x')
     let item = new ListNode()
     if(l1 && l2){
      if(l1.val <= l2.val){
        item.val = l1.val 
        if(l1.next){
          l1 = l1.next
        }else{
          l3
        }
       
      }else{
       item.val = l2.val 
       l2 = l2.next
      }
      l3.next = item
     }    
   }
   return l3.next
};

const l1 = new ListNode(1,null)
l1.next = new ListNode(2,null)
l1.next.next = new ListNode(4,null)
const l2 = new ListNode(1,null)
l1.next = new ListNode(3,null)
l1.next.next = new ListNode(4,null)

mergeTwoLists(l1,l2)