// input:
arr = [-4, 3, -9, 0, 4, 1];
// input: arr = [1,2,3,-1,-2,-3,0,0]

function plusMinus(arr) {
  let numPos = 0;
  let numNeg = 0;
  let numZero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      numPos++;
    } else if (arr[i] > 0) {
      numNeg++;
    } else {
      numZero++;
    }
  }
  console.log((numNeg / arr.length).toFixed(6));
  console.log((numPos / arr.length).toFixed(6));
  console.log((numZero / arr.length).toFixed(6));
}

plusMinus(arr);
