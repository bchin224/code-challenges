/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Input: root = [1,2,3], targetSum = 5

var hasPathSum = function(root, targetSum) {
    // check if the root exists
    if (!root) return false
    
    // if leaf has been reached, check if the remaining val is the targetSum
    if (!root.left && !root.right) {
        console.log(root.val === targetSum ? true : false)
        return root.val === targetSum ? true : false
    }
    
    // if not leaf, subtract the node.val from the targetSum and track
    // the remaining value
    let remain = targetSum - root.val
    // recursion takes care of the loop by testing every path unless it finds a match
    return hasPathSum(root.left, remain) || hasPathSum(root.right, remain)

};

hasPathSum(root, targetSum)