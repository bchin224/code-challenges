Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
// TC O(1) SC O(1)
var arrayStringsAreEqual = function(word1, word2) {
    return word1.join(',').replace(/\,/g,'') === word2.join(',').replace(/\,/g,'')
};

arrayStringsAreEqual(word1, word2)