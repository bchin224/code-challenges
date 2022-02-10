const s = 'a'
const t = 'aa'

// iterate through s and remove each char from t
var findTheDifference = function(s, t) {
    for (let letter of s) {
        t = t.replace(letter, '')
    }
    console.log(t)
};


// var findTheDifference = function(s, t) {
//     let sortS = s.split('').sort()
//     let sortT = t.split('').sort()
//     for (let i = 0; i < t.length; i++) {
//         console.log('take:',i,': ',sortT)
//         if (sortS[0] === sortT[0]) {
//             sortS.shift()
//             sortT.shift() 
//         }
//     }
//     console.log(sortT[0])
// };

findTheDifference(s,t)