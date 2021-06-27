Input: nums = [1,3,5,6], target = 0
Input: nums = [1], target = 0

var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    let mid
    
    // if array is empty, the index should be the beginning
    if (nums.length === 0) {
        console.log(0)
        return 0
    }
    
    // if the target is greater than the last number, index will be at end
    if (target > nums[end]) {
        console.log(end + 1)
        return end + 1
    // if target is less than the value of the 1st, the index will be at 0
    } else if (target < nums[start]) {
        console.log(0)
        return 0
    }
    
    while (start <= end) {
        // calculate midpoint based on updated start and end points
        mid = Math.floor((start + end) / 2)
        // if start = end are the same and target not found, it should be at mid
        if (start === end && nums[start] != target) {
            console.log(mid)
            return mid
        }
        // if target is found, return mid as index
        if (nums[mid] === target) {
            console.log(mid)
            return mid
        }
        // if value at mid is less than target, move start to mid + 1
        if (nums[mid] < target) {
            start = mid + 1
        // if value at mid is greater than target, move end to mid
        } else if (nums[mid] > target) {
            end = mid
        }
    }
};

searchInsert(nums, target)