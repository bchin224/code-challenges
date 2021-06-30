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