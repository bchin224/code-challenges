Input: nums = [-7,-3,2,3,11]

var sortedSquares = function(nums) {
    let left = 0
    let right = nums.length - 1
    let result = []

    while (left <= right) {
        let num1 = Math.pow(nums[left],2)
        let num2 = Math.pow(nums[right],2)
        if (num1 < num2) {
            result.push(num1)
            left++
        } else {
            result.push(num2)
            right--
        }
    }
    console.log(result.sort((a,b) => a-b))
};

sortedSquares(nums)


// var sortedSquares = function(nums) {
//     return (nums.map((num) => num**2)).sort((a,b) => a-b)
// };