Input: nums = [4,3,2,7,8,2,3,1]


// runs in O(n)
var findDisappearedNumbers = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let currentValue = Math.abs(nums[i])
        // check the 0-based index by subtracting 1 from every value
        nums[currentValue-1] = -(Math.abs(nums[currentValue-1]))
        // after this, you will get the following:
        // [-4,-3,-2,-7,8,2,-3,-1]
    }
    let result = []
    // iterate through the array one more time to get index of missing numbers
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            // to change back to non-0-based index, add 1
            result.push(i + 1)
        }
    }
    console.log(result)
    return result
};

findDisappearedNumbers(nums)

// uses additional space and O(n**2) because with every iteration
// it will check the entire array (includes) again
// var findDisappearedNumbers = function(nums) {
//     let result = []
//     for (let i = 0; i < nums.length; i++) {
//         if (!nums.includes(i+1)) {
//             result.push(i+1)
//         }
//     }
//     return result
// };
