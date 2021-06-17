Input: s = "()[]{}"
Input: s = "{[]}"
// Input: s = "([)]"
Input: s = "]"

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