Input: p = [1,2], q = [1,null,2]

var isSameTree = function(p, q) {
    // check if both trees are null (but same) so return true
    if (!p && !q) return true
    // either p or q (but not both) are null or if root values
    // are not the same, then return false
    if (!p || !q || p.val != q.val) return false
    // RECURSION: pass in both node's left child and compare
    // then pass in both node's right child and compare
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

isSameTree(p,q)
// expected false