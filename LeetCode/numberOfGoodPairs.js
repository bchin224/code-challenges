Input: nums = [1,2,3,1,1,3]

var numIdenticalPairs = function(nums) {
    let count = 0
    let newMap = {}
    if (nums.length === 0) {
        return count
    } else {
        for (const number of nums) {
            if (newMap[number]) {
                // increment count by newMap[number] which accounts
                // for multiples such as the 1 in index 4
                count += newMap[number]
                newMap[number]++
            } else {
                // to start, this will run and build keys
                // for every number in nums and start them
                // with a value of 1
                newMap[number] = 1
            }
        }
    return count
    }

};

numIdenticalPairs(nums)

// works in O(n^2) TC and O(1) 
// var numIdenticalPairs = function(nums) {
//     let count = 0
//     if (nums.length === 0) {
//         return count
//     } else {
//         for (let i = 0; i < nums.length; i++) {
//             for (let j = i; j < nums.length; j++) {
//                 if (nums[i] === nums[j] && i < j) {
//                     count++
//                 }
//             }
//         }
//     return count
//     }
// }