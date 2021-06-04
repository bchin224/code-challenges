
Input: s = "RLRRLLRLRL"

// runs but is slow, O(n) TC, O(1) SC
var balancedStringSplit = function(s) {
    let balance = 0
    let countR = 0
    let countL = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'R') {
            countR++
        } else if (s[i] === 'L') {
            countL++
        }
        if (countR === countL) {
            balance++
        }
    }
    return balance
};

balancedStringSplit(s)