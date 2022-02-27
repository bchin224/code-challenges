// Input: s = "()[]{}"
Input: s = "{[]}"
// Input: s = "([)]"
// Input: s = "]"

var isValid = function(s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        let current = s[i]
        let peak = stack[stack.length - 1]
        if (current === '(' || current === '{' || current === '[') {
            stack.push(current)
        } else if (current === ')' && peak === '(') {
            stack.pop()
        } else if (current === '}' && peak === '{') {
            stack.pop()
        } else if (current === ']' && peak === '[') {
            stack.pop()
        } else {
            return false
        }
    }
    if (stack.length === 0) {
        console.log('true')
        return true
    } else {
        console.log('false')
        return false
    }
};

isValid(s)

// var isValid = function(s) {
//     let stack = []
//     for (let i = 0; i < s.length; i++) {
//         let peak = stack[stack.length - 1]
//         if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
//             stack.push(s[i])
//         } else if (s[i] === ')' && peak === '(') {
//                 stack.pop()
//         } else if (s[i] === '}' && peak === '{') {
//             stack.pop()
//         } else if (s[i] === ']' && peak === '[') {
//             stack.pop()
//         } else {
//             console.log('false')
//             return false
//         }
//         console.log(stack)
//     }
//     if (stack.length === 0) {
//         console.log('true')
//         return true
//     } else {
//         console.log('false')
//         return false
//     }
// };