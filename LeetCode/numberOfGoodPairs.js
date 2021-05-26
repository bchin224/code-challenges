var numIdenticalPairs = function(nums) {
    let count = 0
    if (nums.length === 0) {
        return count
    } else {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i; j < nums.length; j++) {
                if (nums[i] === nums[j] && i < j) {
                    count++
                }
            }
        }
    return count
    }

};