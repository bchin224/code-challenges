Input: root = [1,null,2,3]

var inorderTraversal = function(root) {
    let result = []
    traverse(root)
    return result
    
    function traverse(node) {
        if (!node) return // base case
        traverse(node.left)
        result.push(node.val)
        traverse(node.right)
    }
};

inorderTraversal(root)
// expected [1,3,2]

// go down the first path to the left until left is null
// then push that value to the result array
// then check if right is null
// if both left and right are null (at leaf node),
// then recursion brings us up on level
// during the recursion, function only checks for right nodes
// when right node is null, push that value