
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let tempNode = new ListNode(0, null)
    let currentNode = tempNode

    while (list1 && list2) {
        if(list1.val < list2.val) {
            currentNode.next = list1;
            list1 = list1.next
        } else {
            currentNode.next = list2;
            list2 = list2.next
        }
        currentNode = currentNode.next;
    }
    currentNode.next = list1 || list2

    return tempNode.next
};












// Input: l1 = [], l2 = [0]

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
//  var mergeTwoLists = function(l1, l2) {
//     let mergedList = new ListNode()
//     let head = mergedList
    
//     while (l1 && l2) {
//         if (l1.val < l2.val) {
//             mergedList.next = l1
//             l1 = l1.next
//         } else {
//             mergedList.next = l2
//             l2 = l2.next
//         }
//         mergedList = mergedList.next
//     }
    
//     if (!l1) {
//         mergedList.next = l2
//     } else if (!l2) {
//         mergedList.next = l1
//     }
//     return head.next
// };

// mergeTwoLists(l1, l2)