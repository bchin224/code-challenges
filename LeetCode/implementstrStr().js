Input: haystack = "hello", needle = "ll"
// Input: haystack = "aaaaa", needle = "bba"
// Input: haystack = "", needle = ""

var strStr = function(haystack, needle) {
    if (needle === '' || needle === haystack) {
        console.log(0)
        return 0
    }
    if (needle.length > haystack.length) {
        console.log(-1)
        return -1
    }

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let count = 1
            for (let j = 1; j < needle.length; j++) {
                if (needle[j] === haystack[i+j]) {
                    count++
                }
            }
            if (count === needle.length) {
                console.log(i)
                return i
            }
        }
    }
    console.log(-1)
    return -1
};

strStr(haystack, needle)

// var strStr = function(haystack, needle) {
//     // if needle is empty or the same as haystack, return 0
//     if (needle === '' || needle === haystack) return 0

//     // if needle is longer than haystack, return -1
//     if (needle.length > haystack.length) {
//         console.log(-1)
//         return -1
//     }

//     // iterate through haystack
//     for (let i = 0; i < haystack.length; i++) {
//         // if haystack = needle[0], there's a possible needle match
//         if (haystack[i] === needle[0]) {
//             let count = 1
//             for (let j = 1; j < needle.length; j++) {
//                 if (needle[j] === haystack[i+j]) {
//                     count++
//                 }
//             }
//             // if the length of needle has been reached, needle has been found
//             if (count === needle.length) {
//                 console.log(i)
//                 return i
//             }
//         }
//     }

//     // if needle not found, return -1
//     console.log(-1)
//     return -1

// };

// strStr(haystack, needle)