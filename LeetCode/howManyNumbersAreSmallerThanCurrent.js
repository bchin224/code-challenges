Input: nums = [8,1,2,2,3]

// using sort and hash map reduces TC O(n log n), SC O(n)
var smallerNumbersThanCurrent = function(nums) {
    const sortedArray = Array.from(nums).sort((a,b) => b - a)
    const map = new Map(sortedArray.map((num, idx) => [num, nums.length - idx - 1]))
    console.log(nums.map(num => map.get(num)))
    return nums.map(num => map.get(num))
};

smallerNumbersThanCurrent(nums)

// TC O(n^2), SC O(n)
// var smallerNumbersThanCurrent = function(nums) {
//     let resultArray = []
//     let count = 0
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if (nums[i] > nums[j]) {
//                 count++
//             }
//         }
//         resultArray.push(count)
//         count = 0
//     }
//     console.log(resultArray)
//     return resultArray
// };