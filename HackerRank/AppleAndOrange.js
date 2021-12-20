let s = 7
let t = 10
let a = 4
let b = 12
let apples = [2,3,-4]
let oranges = [3,-2,-4]

function countApplesAndOranges(s, t, a, b, apples, oranges) {

    const mapApples = apples.map( x => a + x).filter(numA => numA >= s && numA <= t)
    const mapOranges = oranges.map( x => b + x).filter(numO => numO >= s && numO <= t)
    
    console.log(mapApples.length)
    console.log(mapOranges.length)
}

countApplesAndOranges(s, t, a, b, apples, oranges)