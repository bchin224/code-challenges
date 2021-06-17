Input: nums = [1,1,2,3]

// O(n) TC O(n) SC
var decompressRLElist = function(nums) {
    let result = []
    for (let i = 0; i < nums.length; i += 2) {
        let j = nums[i]
        while (j > 0) {
            result.push(nums[i+1])
            j--
        }
    }
    console.log(result)
    return result
};

decompressRLElist(nums)