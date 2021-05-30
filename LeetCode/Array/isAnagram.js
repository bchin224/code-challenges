Input: s = "aacc", t = "caac"

var isAnagram = function(s, t) {
    // if strings are different length, definitely not anagrams
    if (s.length != t.length) {
        return false
    }
    // make a hash newMap with the counts of all letters in s
    const newMap = {}
    for (let i = 0; i < s.length; i++) {
        newMap[s[i]] ? newMap[s[i]]++ : newMap[s[i]] = 1
    }
    // using the keys in t, check if it's in the hash map
    // if it is, decrement it. If not, then it's not an anagram
    for (let i = 0; i < t.length; i++) {
        if (newMap[t[i]]) {
            newMap[t[i]]--
        } else {
            // if t[i] is not in the hash map, then not anagram
            console.log('Not an anagram')
            return false
        }
    }
    console.log('This is an anagram')
    return true
};

isAnagram(s,t)


// simple, but slower approach O(n log n) because of the sorting of both strings
// split uses a lot of temp space as well
// var isAnagram = function(s, t) {
//     return s.split('').sort().join('') === t.split('').sort().join('')
// };