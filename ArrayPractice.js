// let cheese = ['parm', 'mozz', 'gouda', 'pepperjack', 'brie', 'gouda', 'munster']

// // splice modifies the existing array
// // cheese.splice(1, 1, 'SWISSSSSS')

// // slice returns a slice as a new array
// // let sliced = cheese.slice(0,3)

// // cheese.forEach((item, index) => {
// //     console.log(`At index ${index} is ${item}.`)
// // })

// let result = cheese.map((item) => {
//     return item
// })
// console.log(result)

// --------------------------------

let numbers = [6,2,4,7,8,2,8,4,5,2,8,9,4]

let result = numbers.reduce((a,b)=> a + b)

console.log(result)