nums = [1,2,3,4,5,6,7]
k = 3
// nums = [-1,-100,3,99], k = 2

// reverse method is in time O(n) and space O(1)
var rotate = function(nums, k) {
    k = k % nums.length

    reverse(nums, 0, nums.length-1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length-1)

    console.log(nums)
};

var reverse = function(nums, start, end) {
    while (start < end) {
        let temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start++
        end--
    }
}

rotate(nums,k)

// times out with very large inputs and large k
// var rotate = function(nums, k) {
//     let i = 0
//     while (i < (k % nums.length)) {
//         nums.unshift(nums.pop())
//         i++
//     }
//     console.log(nums)
// };