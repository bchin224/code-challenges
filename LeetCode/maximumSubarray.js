Input: nums = [-2,1,-3,4,-1,2,1,-5,4]


var maxSubArray = function(nums) {
    for (let i = 1; i < nums.length; i++){
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    }
    console.log(Math.max(...nums))
    return Math.max(...nums);
};

maxSubArray(nums)
// expected 6

// after the for loop, nums = [-2,1,-2,4,3,5,6,1,5]
// then return the max of that array

// whenever you assign nums[i] = nums[i], you're starting a new subarray
// whenever you assign nums[i] = nums[i] + nums[i-1], you're adding to that subarray
// each nums[i] + nums[i-1] is the latest max


// For each iteration, you store the current max in nums[i] (the value isn't needed anymore so it's ok to overwrite).
// The comparison is deciding whether to
// a) reset the array --> thus reset with the sum equal to the current value of the array, or
// b) to add onto the current sum --> nums[i] (not yet overwritten) + nums[i - 1] (holds max sum at that index, is overwritten)