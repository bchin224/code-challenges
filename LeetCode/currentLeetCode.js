Input: nums = [1,1,2]
Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Input: nums = [5]

var removeDuplicates = function(nums) {
    let result = 0
    for (let i = 1; i <= nums.length; i++) {
        if (nums[i] != nums[i-1]) {
            result++
        }
    }
    console.log(result)
    return result
};

removeDuplicates(nums)

// var removeDuplicates = function(nums) {
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] === nums[i-1]) {
//             nums.splice(i,1)
//             i--
//         }
//         console.log(i)
//     }
//     console.log(nums)
//     return nums.length
// };
