const haystack = 'hello'
const needle = 'll'

var strStr = function(haystack, needle) {
    const needLen = needle.length
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.substring(i,i+needLen) == needle) {
            console.log(i)
            return i
        }
    }
    console.log('Not in haystack')
    return -1
};

strStr(haystack, needle)