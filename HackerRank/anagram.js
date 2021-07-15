// input: s = 'aaabbb'
// input: s = 'xaxbbbxx'
// input: s = 'ab'
// input: s = 'abc'
// input: s = 'mnop'
// input: s = 'xyyx'

function anagram(s) {
    // if there are an odd number of letters, can't be anagram
    if (s.length % 2 != 0) return -1
    
    let midpoint = s.length / 2
    let stack1 = s.slice(0,midpoint).split('')
    let stack2 = s.slice(midpoint, s.length).split('')
    let i = 0

    while (i < stack1.length) {
        // if s2 has that value in s1, remove them
        if (stack2.includes(stack1[i])) {
            stack2.splice(stack2.indexOf(stack1[i]),1)
            stack1.splice(i,1)
        } else {
            i++
        }
    }
    // return what's left of stack1 after popping
    console.log(stack1.length)
    return stack1.length
}

anagram(s)