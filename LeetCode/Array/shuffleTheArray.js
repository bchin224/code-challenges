Input: nums = [1,2,3,4,4,3,2,1], n = 4

var shuffle = function(nums, n) {
    let rightPointer = n
    let result = []
    for (let i = 0; i < n; i++) {
        result.push(nums[i])
        result.push(nums[rightPointer])
        rightPointer++
    }
    return result
};

shuffle(nums)