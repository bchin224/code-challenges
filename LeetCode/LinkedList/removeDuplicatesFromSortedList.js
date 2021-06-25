Input: head = [1,1,2,3,3]

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
 var deleteDuplicates = function(head) {
     // create variable pointer to iterate through list called currNode
     // set variable pointer = list
    let currNode = head

    while (currNode) {
        // while list is valid and if head.val === head.next.val (duplicate)
        if (currNode.next != null && currNode.val === currNode.next.val) {
            // set head.next to head.next.next (skip and remove the duplicate)
            currNode.next = currNode.next.next
        } else {
            // else, update currNode to the next value
            currNode = currNode.next
        }
    }
    return head
};

deleteDuplicates(head)