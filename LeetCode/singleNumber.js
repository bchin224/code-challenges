nums = [4,1,2,1,2,4,7]

var singleNumber = function(nums) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]]++
        } else {
            obj[nums[i]] = 1
        }
    }
    for (key in obj) {
        if (obj[key] === 1)
        return key
    }
};

singleNumber(nums)
