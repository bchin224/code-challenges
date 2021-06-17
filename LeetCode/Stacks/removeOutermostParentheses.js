Input: s = "(()())(())(()(()))"
Input: s = "()()"
Input: s = "(()())(())"

var removeOuterParentheses = function(s) {
    let counter = 0
    let stack = []
    let leftIdx = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i])
            counter++
            console.log(`counter ( at ${i} is ${counter}`)
        } else if (s[i] === ')') {
            stack.push(s[i])
            counter--
            console.log(`counter ) at ${i} is ${counter}`)
        }
        if (counter === 0) {
            stack[leftIdx] = 2
            stack[i] = 2
            leftIdx = i + 1
        }
    }
    console.log((stack.filter((paren) => paren != 2)).toString(',').replace(/\,/g,''))
    return (stack.filter((paren) => paren != 2)).toString(',').replace(/\,/g,'')

};

removeOuterParentheses(s)