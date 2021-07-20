// Input: nums = [2,2,1,1,1,2,2]
Input: nums = [1]

var majorityElement = function(nums) {
    const newMap = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        if (nums.length <= 1) return nums[0]
        if (newMap.has(nums[i])) {
            newMap.set((nums[i]), (newMap.get(nums[i])) + 1)
            
            if (newMap.get(nums[i]) > nums.length/2) {
                // console.log(nums[i])
                return nums[i]
            }
        } else {
            newMap.set(nums[i], 1)
        }
    }
};

majorityElement(nums)


// cleaner way of doing it
// var majorityElement = function(nums) {
//     var obj = {};
    
//     for(var i = 0; i < nums.length; i++){
//         obj[nums[i]] = obj[nums[i]] + 1 || 1;
//         if(obj[nums[i]] > nums.length / 2)  return nums[i];
//     }
    
// };