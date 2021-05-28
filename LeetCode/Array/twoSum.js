nums = [2,7,11,15], target = 9

var twoSum = function(nums, target) {
    for (let i = 0; i <= nums.length; i++) {
        let check = target - nums[i]
        if (nums.includes(check) && i != nums.indexOf(check)) {
            return [nums.indexOf(check), i]
        }
    }
};

twoSum(nums,target)

// brute force method, super slow
// var twoSum = function(nums, target) {
//     for (let i = 0; i <= nums.length; i++) {
//         for (let j = (i+1); j <= nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 console.log([i,j])
//                 return [i,j]
//             }
//         }
//     }
// };

// subtracting a value from target, then check if the difference exists in nums
// var twoSum = function(nums, target) {
//     for (let i = 0; i <= nums.length; i++) {
//         let check = target - nums[i]
//         if (nums.includes(check) && i != nums.indexOf(check)) {
//             return [nums.indexOf(check), i]
//         }
//     }
// };