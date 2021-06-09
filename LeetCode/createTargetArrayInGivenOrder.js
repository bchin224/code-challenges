Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]

var createTargetArray = function(nums, index) {
    let target = []
    for (let i = 0; i < index.length; i++) {
        if (target[index[i]] === undefined) {
            target[index[i]] = nums[index[i]]
        } else {
            target.splice(index[i], 0, nums[i])
        }
    }
    // console.log(target)
    return target
};

createTargetArray(nums, index)