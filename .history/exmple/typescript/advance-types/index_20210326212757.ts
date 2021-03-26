
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }


 function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
        let  l3 = new ListNode(0);
        let cur = l3;
        while (l1 != null && l2 != null) {
            if (l1.val < l2.val) {
                cur.next = l1;
                cur = cur.next;
                l1 = l1.next;
            } else {
                cur.next = l2;
                cur = cur.next;
                l2 = l2.next;
            }
        }
        // 任一为空，直接连接另一条链表
        if (l1 == null) {
            cur.next = l2;
        } else {
            cur.next = l1;
        }
        return l3.next;
};

const l1 = new ListNode(1,null)
l1.next = new ListNode(2,null)
l1.next.next = new ListNode(4,null)
const l2 = new ListNode(1,null)
l1.next = new ListNode(3,null)
l1.next.next = new ListNode(4,null)

mergeTwoLists(l1,l2)