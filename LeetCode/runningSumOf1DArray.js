Input: nums = []

var runningSum = function(nums) {
    // create new array for results
    let resultArr = []
    // if array is empty or has 1 value, return result
    if (nums.length === 0) {
        console.log(resultArr)
        return
    } else if (nums.length === 1) {
        console.log(nums)
        return
    // iterate through array and add each
    } else {
        resultArr[0] = nums[0]
        for (let i = 1; i < nums.length; i++) {
            resultArr[i] = nums[i] + resultArr[i-1]
        }
        console.log(resultArr)
    }
};

runningSum(nums)