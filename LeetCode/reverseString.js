s = ["h","e","l","l","o"]
s2 = []

var reverseString = function(s) {
    let rightPointer = s.length - 1
    let temp = 0
    for (let i = 0; i < s.length/2; i++) {
        if (i < rightPointer) {
            temp = s[i]
            s[i] = s[rightPointer]
            s[rightPointer] = temp
            rightPointer--
        }
    }
    console.log(s)
};

reverseString(s)