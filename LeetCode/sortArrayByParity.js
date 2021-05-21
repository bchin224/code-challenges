nums = [3,1,2,4]

var sortArrayByParity = function(nums) {
    let i = 0
    let j = nums.length - 1
    // as long as left pointer is less than right pointer
    while (i < j) {
        // if left pointer is odd and right is even
        if (nums[i] % 2 > nums[j] % 2) {
            // swap values
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
        }
        // if the value is even, increment
        if (nums[i] % 2 === 0) {
            i++
        // if value is odd, decrement
        } else {
            j--
        }
    }
    console.log(nums)
};

sortArrayByParity(nums)