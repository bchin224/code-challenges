Input: command = "G()()()()(al)"

var interpret = function(command) {
    return command.split('()').join('o').split('(al)').join('al')
};

interpret(command)

// Using replace
// const interpret = function(command) {
//     return command.replace(/\(\)/g, "o").replace(/\(al\)/g, "al");
//   };



// TC O(n) SC O(n)
// var interpret = function(command) {
//     let parsedInfo = []
//     for (let i = 0; i < command.length; i++) {
//         if (command[i] === 'G') {
//             parsedInfo.push("G")
//         } else if (command[i] === '(' && command[i+1] === ')') {
//             parsedInfo.push('o')
//             i++
//         } else if (command[i] === '(' &&
//                    command[i+1] === 'a' &&
//                   command[i+2] === 'l' &&
//                   command[i+3] === ')') {
//             parsedInfo.push('al')
//             i += 3
//         }
//     }
//     console.log(parsedInfo.join('').toString())
//     return parsedInfo.join('').toString()
// };