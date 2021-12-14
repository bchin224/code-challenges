const s = [1,2,1,3,2]
const d = 3
const m = 2

function birthday(s, d, m) {
    let result = 0
    
    for (let i = 0; i < s.length; i++) {
        let selection = s.slice(i, i + m)
        let sum = selection.reduce((a,b) => a+b, 0)
        if (sum === d) {
            result++
        }
    }
    return result
}

birthday(s,d,m)