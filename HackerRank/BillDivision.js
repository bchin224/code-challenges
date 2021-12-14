let bill = [3, 10, 2, 9]
let k = 1
let b = 12

function bonAppetit(bill, k, b) {
    // console.log('Bill is: ' + bill)
    let anna = ((bill.reduce((a,b) => a + b)) - bill[k])/2
    if (b === anna) {
        console.log('Bon Appetit')
        return 'Bon Appetit'
    } else {
        console.log(b-anna)
        return b - anna
    }

}

bonAppetit(bill, k, b)