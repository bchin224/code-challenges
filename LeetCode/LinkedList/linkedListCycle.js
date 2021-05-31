/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

Input: head = [3,2,0,-4], pos = 1

var hasCycle = function(head) {
    let fast = head
    let slow = head
    if (this.head === null) {
        return false
    } else {
        while (fast !== null && fast.next !== null) {
            fast = fast.next.next
            slow = slow.next
            if (fast === slow) {
                return true
            }
        }
        return false
    }
};

hasCycle(head)