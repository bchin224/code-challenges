nums = [1,2,3,1]

var containsDuplicate = function(nums) {
    let duplicate = false
    // sort the array so duplicates would be consecutive
    // sorting takes O(n log n)
    nums.sort((a,b) => a-b)
    // sweep through array and look for consecutive #'s that are same
    // sweeping takes O(n)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) {
            duplicate = true
        }
    }
    console.log(duplicate)
};

// using an object instead of sort
// var containsDuplicate = function(nums) {
//     let obj = {}
//     let duplicate = false
//     // iterate through the array: O(n)
//     for (let i = 0; i < nums.length; i++){
//         // if obj[num[i]] is true, then that object exists so add to the count
//         if(obj[nums[i]])
//             obj[nums[i]]++
//         // else if it doesn't exist, create it with a count of 1
//         else obj[nums[i]] = 1
//     }
//     // if any keys in obj contain numbers > 1, then there are duplicates
//      for(let key in obj ){
//          if(obj[key]> 1)
//          // set value to true
//          duplicate = true
//      }
//      console.log(duplicate)
//  };

containsDuplicate(nums)