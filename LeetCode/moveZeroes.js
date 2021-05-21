nums = [0,0,1]

var moveZeroes = function(nums) {
    let lastNonZero = 0
    // move all non-zero numbers to the front in order
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[lastNonZero] = nums[i]
            lastNonZero++
        }
    }
    // fill the remaining indexes from the last non-zero with zeroes
    for (let i = lastNonZero; i < nums.length; i++) {
        nums[i] = 0
    }
  console.log(nums)
};

moveZeroes(nums)