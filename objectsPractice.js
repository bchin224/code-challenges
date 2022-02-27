// let bear = {
//     name: "steve",
//     type: "bear"
// }

// console.log(typeof(bear))
// console.log(bear)

// // add properties (key/values) to an object
// Object.assign(bear, {title: 'Business Bear'}, { tie: 'Blue' })

// console.log(bear)

let car = {
    color: 'red',
    year: '2012',
    wheels: '4',
    'owners': ['larry', 'chuck', 'tom', 'craig'],
    'license-plate': 'gd298l',
    fourwheeldrive: true,
    'interior': 'cloth'
}

// console.log(typeof(car))
// console.log(car)
let jsonCar = JSON.stringify(car)
// console.log(typeof(jsonCar))
let makeJson = JSON.parse(jsonCar)
console.log(makeJson)