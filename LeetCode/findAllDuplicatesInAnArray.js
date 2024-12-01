// Input:
nums = [4, 3, 2, 7, 8, 2, 3, 1];

// TC O(n) SC O(n) slightly faster
var findDuplicates = function (nums) {
  const newMap = new Map();

  for (num of nums) {
    console.log("Num is: ", num);
    if (newMap.has(num)) {
      newMap.set(num, 2);
    } else {
      newMap.set(num, 1);
    }
  }
  let doublesArray = [];
  for (let [key, value] of newMap) {
    if (value === 2) {
      doublesArray.push(key);
    }
  }
  console.log(doublesArray);
  // return doublesArray
};

findDuplicates(nums);

// // TC O(n^2) SC O(n) slower because of sort
// var findDuplicates = function(nums) {
//     nums.sort((a,b) => a-b)
//     let doublesArray = []
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === nums[i+1]) {
//             doublesArray.push(nums[i])
//         }
//     }
//     return doublesArray
// };
