nums1 = [1,2,2,1], nums2 = [2,2]

var intersect = function(nums1, nums2) {
    let result = []
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i])) {
            let idx = nums2.indexOf(nums1[i])
            result.push(nums2[idx])
            delete(nums2[idx])
        }
    }
    return result
};

intersect(nums1, nums2)

// using a hashmap
// var intersect = function(nums1, nums2) {
//     const map = new Map();
//     for (const n of nums1) {
//         if (map.has(n)) {
//             map.set(n, map.get(n) + 1);
//         } else {
//             map.set(n, 1);
//         }
//     }
//     const result = [];
//     for (const n of nums2) {
//         if (map.has(n) && map.get(n) > 0) {
//             result.push(n);
//             map.set(n, map.get(n) - 1);
//         }
//     }
//     return result;
// };