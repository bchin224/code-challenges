Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]

var restoreString = function(s, indices) {
    let sortedString = []
    for (let i = 0; i < s.length; i++) {
        sortedString[indices[i]] = s[i]
    }
    console.log(sortedString.join(''))
    return sortedString.join('')
};

restoreString(s, indices)

// O(n) TC, O(n) SC
// var restoreString = function(s, indices) {
//     let sortedString = []
//     for (let i = 0; i < s.length; i++) {
//         let index = indices.indexOf(i)
//         sortedString.push(s[index])
//     }
//     console.log(sortedString.join(''))
//     return sortedString.join('')
// };

