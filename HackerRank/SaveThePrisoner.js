// let n = 5 // prisoners
// let m = 2 // candy
// let s = 2 // start point

let n = 7 // prisoners
let m = 19 // candy
let s = 2 // start point

function saveThePrisoner(n, m, s) {
    // subtract 1 to account for zero index
    // then add s to account for not starting at 1
    // modulo returns the remainder which is the end
    // or else just return the n (instead of 0)
    console.log((m - 1 + s) % n || n)
}

saveThePrisoner(n, m, s)

// this function times out at giant data sets
// function saveThePrisoner(n, m, s) {

//     while (m > 1) {
//         if (s < n) {
//             s++
//         } else if (s === n) {
//             s = 1
//         }
//         m--
//     }
//     console.log(s)

// }