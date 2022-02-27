// const animals = new Map()

// animals.set('bears', 11)
// animals.set('donkeys',2)
// animals.set('woofs', 5)
// animals.set('manatees', 55)

// // return the value associated with all of the keys in the map
// // animals.forEach((value, key) => console.log(`There are ${value} ${key} at the zoo right now.`))

// // get the value associated with a key
// // console.log(animals.get('bears'))

// // check if key is in the map
// // console.log(animals.has('donkeys'))
// // console.log(animals.has('birds'))

// // return an iterable of all the key value pairs in the map
// // console.log(animals.entries())

// // use a for...of loop to return all elements of map
// for (let [key,value] of animals) {
//     console.log(`${key} = ${value}`)
// }

// // console.log(animals)

const guitars = new Map()

guitars.set(1, 'PRS')
guitars.set(2, 'Les Paul')
guitars.set(3, 'Ibanez')

guitars.delete(2)

console.log(guitars.size)