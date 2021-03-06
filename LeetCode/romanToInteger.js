Input: s = "LVIII"

var romanToInt = function(s) {
    const romanNumerals = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let result = 0
    for (i = 0; i < s.length; i++) {
        if (s[i] === "I") {
            if (s[i + 1] === "V") {
                result += 4
                i++
            } else if (s[i + 1] === "X") {
                result += 9
                i++
            } else {
                result ++
            }
        } else if (s[i] === "X") {
            if (s[i + 1] === "L") {
                result += 40
                i++
            } else if (s[i + 1] === "C") {
                result += 90
                i++
            } else {
                result += 10
            }
        } else if (s[i] === "C") {
            if (s[i + 1] === "D") {
                result += 400
                i++
            } else if (s[i + 1] === "M") {
                result += 900
                i++
            } else {
                result += 100
            }
        }  else {
            result += romanNumerals[s[i]]
        } 
    }
    console.log(result)
    return result
};

romanToInt(s)

// var romanToInt = function(s) {
//     let result = 0
//     let split = s.split('')
    
//     for (let i = 0; i < split.length; i++) {
//         if (split[i] === 'I') {
//             if (split[i+1] === 'V') {
//                 result += 4
//                 i++
//             } else if (split[i+1] === 'X') {
//                 result += 9
//                 i++
//             } else {
//                 result++
//             }
//         } else if (split[i] === 'V') {
//             result += 5
//         } else if (split[i] === 'X') {
//             if (split[i+1] === 'L') {
//                 result += 40
//                 i++
//             } else if (split[i+1] === 'C') {
//                 result += 90
//                 i++
//             } else {
//                 result += 10
//             }
//         } else if (split[i] === 'L') {
//             result += 50
//         } else if (split[i] === 'C') {
//             if (split[i+1] === 'D') {
//                 result += 400
//                 i++
//             } else if (split[i+1] === 'M') {
//                 result += 900
//                 i++
//             } else {
//                 result += 100
//             }
//         } else if (split[i] === 'D') {
//             result += 500
//         } else if (split[i] === 'M') {
//             result += 1000
//         }
//     }
//     console.log(result)
// };