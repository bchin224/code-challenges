Input: nums = [2,7,11,15], target = 9
// Input: nums = [3,2,4], target = 6
// Input: nums = [3,3], target = 6

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let pointer = target - nums[i]
        if (nums.includes(pointer) && i != nums.indexOf(pointer)) {
            console.log(i, nums.indexOf(pointer))
            return
        }
    }
};

twoSum(nums, target)