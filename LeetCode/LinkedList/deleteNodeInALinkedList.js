Input: head = [1,2,3,4], node = 3

var deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next
};

deleteNode(node)