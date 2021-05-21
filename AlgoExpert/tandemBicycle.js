// redShirtSpeeds = [3,4,4,1,1,8,9]
// blueShirtSpeeds = [9,8,2,2,3,5,6]

redShirtSpeeds = [5,5,3,9,2]
blueShirtSpeeds = [3,6,7,2,1]
fastest = false

const tandemBicycle = (redShirtSpeeds, blueShirtSpeeds, fastest) => {
    let totalSpeed = 0
    redShirtSpeeds.sort((a,b) => a-b)
    blueShirtSpeeds.sort((a,b) => a-b)
    // console.log(redShirtSpeeds, blueShirtSpeeds)
    if (redShirtSpeeds.length === 0 || blueShirtSpeeds.length === 0) {
        return totalSpeed
    } else if (fastest === true) {
        let combined = (redShirtSpeeds.concat(blueShirtSpeeds)).sort((a,b) => a-b)
        for (let i = combined.length - 1; i >= redShirtSpeeds.length; i--) {
            totalSpeed += combined[i]
        }
        console.log(totalSpeed)
    } else if (fastest === false) {
        for (let i = 0; i < redShirtSpeeds.length; i++) {
            if (redShirtSpeeds[i] <= blueShirtSpeeds[i]) {
                totalSpeed += blueShirtSpeeds[i]
            } else if (redShirtSpeeds[i] > blueShirtSpeeds[i]) {
                totalSpeed += redShirtSpeeds[i]
            }
        }
        console.log(totalSpeed)
    }
}

tandemBicycle(redShirtSpeeds,blueShirtSpeeds,fastest)



// --------------- This doesn't work. It misses the 5, and shouldn't take in a 1 ever-----
// redShirtSpeeds = [3,4,4,1,1,8,9]
// blueShirtSpeeds = [9,8,2,2,3,5,6]
// fastest = false

// const tandemBicycle = (redShirtSpeeds, blueShirtSpeeds, fastest) => {
//     let sum = []
//     let combined = (redShirtSpeeds.concat(blueShirtSpeeds)).sort((a,b) => a-b)
//     console.log('This is combined, ', combined)
//     if (redShirtSpeeds.length === 0 || blueShirtSpeeds === 0) {
//         return sum
//     } else if (fastest === true) {
//         for (let i = combined.length - 1; i >= redShirtSpeeds.length; i--) {
//             sum.push(combined[i])
//         }
//         console.log(sum.reduce((a,b) => a+b))
//     } else if (fastest === false) {
//         for (let i = combined.length - 1; i >= 0; i -= 2) {
//             sum.push(combined[i])
//         }
//         console.log(sum.reduce((a,b) => a+b))
//     }
// }

// tandemBicycle(redShirtSpeeds,blueShirtSpeeds,fastest)
