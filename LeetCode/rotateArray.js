nums = [1,2,3,4,5,6,7]
k = 3

var rotate = function(nums, k) {
    let start = nums.slice(k+1)
    let end = nums.slice(0,k+1)
    let result = start.concat(end)
    console.log(result)
};

rotate(nums,k)