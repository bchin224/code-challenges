Input: l1 = [2,4,3], l2 = [5,6,4]
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
    let head = new ListNode(0)
    let node = head
    let carryOver = 0
    
    // when both l1 and l2 are empty, while loop ends
    while (l1 || l2) {
        // set the value of each to 0 if they don't exist
        let l1Value = l1 ? l1.val : 0
        let l2Value = l2 ? l2.val : 0

        let sum = l1Value + l2Value + carryOver
        carryOver = 0
        let newValue = sum
        // this accounts for numbers being added and carrying over
        if (sum > 9) {
            newValue = sum % 10
            carryOver = 1
        }
        
        node.next = new ListNode(newValue)
        node = node.next
        
        if (l1) {
            l1 = l1.next
        }
        
        if (l2) {
            l2 = l2.next
        }
    }
    
    if (carryOver) {
        node.next = new ListNode(carryOver)
    }
    return head.next
};

addTwoNumbers(l1, l2)