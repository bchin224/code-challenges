Input: nums = [1,2,2,5,3,5]

var thirdMax = function(nums) {
    let max = []
    let counter = 0
    nums.sort((a,b) => a-b)
    if (nums.length < 3) {
        return nums[nums.length - 1]
    } else {
        for (let i = nums.length - 1; i >= 0; i--) {
            if (nums[i] === undefined) {
                return nums.length - 1
            } else if (max.includes(nums[i])) {
                continue
            } else {
                max.push(nums[i])
                counter++
            }
            if (counter === 3) {
                break
            }
        }
        if ( max.length >= 3) {
            return max[max.length-1]
        } else {
            return nums[nums.length - 1]
        }
    }
}

thirdMax(nums)