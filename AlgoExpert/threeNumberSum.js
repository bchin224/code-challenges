const threeNumbSum = (arr, n) => {
    let result = []
    let r = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            for (let k = j; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === n) {
                    if (!([arr[i],arr[j],arr[k]]).sort() in result) {
                        continue
                    } else if (arr[i] != arr[j] || arr[j] != arr[k] || arr[i] != [k]) {
                        result[r] = ([arr[i],arr[j],arr[k]]).sort()
                        r++
                    }
                }
            }
        }
    }
    console.log(result)
}

threeNumbSum([5,3,2], 0)
// ThreeNumbSum([12,3,1,2,-6,5,-8,6], 0)