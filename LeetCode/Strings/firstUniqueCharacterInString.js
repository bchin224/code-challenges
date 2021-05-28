Input: s = "aabb"

var firstUniqChar = function(s) {
    const map = new Map()
    for (const letter of s) {
        if (map.has(letter)) {
            map.set(letter, map.get(letter)+ 1)
        } else {
            map.set(letter, 1)
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i]) && map.get(s[i]) === 1) {
            console.log(i)
            return i
        }
    }
    console.log(-1)
    return -1
};

firstUniqChar(s)