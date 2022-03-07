nums = [3,2,2,3]
val = 3

// SC: O(1) constant space, TC: O(n) linear time
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i,1)
            i--
        }
    }
    console.log(nums.length)
};

removeElement(nums, val)