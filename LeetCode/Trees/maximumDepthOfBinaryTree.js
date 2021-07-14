Input: root = [3,9,20,null,null,15,7]

var maxDepth = function(root) {
    // if there's no root, return 0
    if (!root) return 0
    // recursively + 1 for the the max of whichever path is greater (Max)
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

maxDepth(root)