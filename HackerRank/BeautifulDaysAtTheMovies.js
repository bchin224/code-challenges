let i = 20
let j = 23
let k = 6

function beautifulDays(i, j, k) {
    let result = 0

    const flip = number => {
        return number.toString().split('').reverse().join('')
    }

    while (i <= j) {
        if ((i - flip(i)) % k === 0) {
            result++
        }
        i++
    }

    console.log(result)
    return result
}

beautifulDays(i, j, k)