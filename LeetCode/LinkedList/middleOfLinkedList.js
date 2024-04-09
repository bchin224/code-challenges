/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let current = curr = head
    let length = 0

    // get length of the list
    while (current != null) {
        length++
        current = current.next
    }
    // iterate through list half the times
    for (let i = 0; i < Math.floor(length/2); i++) {
        curr = curr.next
    }
    return curr
};