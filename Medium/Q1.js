/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 var addTwoNumbers = function(l1, l2) {
    let sum,carry = 0;
    let result = new ListNode(0)
    let temp = result;
      
      while ( l1 || l2 )
         {
           sum = (l1 ? l1.val:0) + (l2 ? l2.val:0) + carry
           carry = 0;
             if (sum > 9)
                 {
                     sum %= 10;
                     carry = 1;
                 }
             temp.next = new ListNode(sum)
             temp = temp.next
             
             if(l1)
                 l1 = l1.next
             if(l2)
                 l2 = l2.next
         }
      if (carry)
          {
              temp.next = new ListNode(carry)
          }
      return result.next;
  
     
  };