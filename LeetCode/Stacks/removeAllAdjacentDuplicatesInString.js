Input: s = "abbaca"

// TC O(n) SC O(n)
var removeDuplicates = function(s) {
    const stack = []
    for (const char of s) {
        // check if the character is in the stack
        // to start, the stack is empty, so add 'a' at index 0
        // then add b to the stack, then when b at index 2 is found, pop the b
        // then when a at index 3 is found, the only item on the stack (stack[stack.length - 1]) is an a
        // so pop a at index 3, then add the c 
        stack[stack.length - 1] === char ? stack.pop() : stack.push(char)
    }
    console.log(stack.join(''))
    return stack.join('')
};

removeDuplicates(s)
// iterate through the string and see if it matches top of stack
// if it does, then the characters are equal and adjacent so don't add to stack and pop from stack
// should only be left with non-adjacent duplicates in the string