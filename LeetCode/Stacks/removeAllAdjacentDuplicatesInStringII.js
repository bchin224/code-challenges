Input: s = "deeedbbcccbdaa", k = 3

// TC O(n) SC O(n)
var removeDuplicates = function(s, k) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        let current = s[i]
        let stackPeak = stack[stack.length-1]
        // if stack is empty or current is not adjacent, push to stack
        if (stack.length === 0 || stackPeak[0] !== current) {
            stack.push([current, 1])
        } else {
            // if current is same as peak, then they're adjacent, pop
            stackPeak[1]++
            if (stackPeak[1] === k) {
                stack.pop()
            }
        }
    }
    // loop through stack and add characters of stack to result string
    let result = ''
    for (let [char, count] of stack) {
        // repeat will add the character that amount of times
        result += char.repeat(count)
    }
    console.log(result)
    return result
};

removeDuplicates(s, k)