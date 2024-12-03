const arr = [1, 4, 4, 4, 5, 6];

function migratoryBirds(arr) {
  // build object
  let birdObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (birdObj[arr[i]]) {
      birdObj[arr[i]] += 1;
    } else {
      birdObj[arr[i]] = 1;
    }
  }
  const highestKey = Object.keys(birdObj).reduce((maxKey, currentKey) => {
    const maxVal = birdObj[maxKey];
    const currentVal = birdObj[currentKey];

    if (
      currentVal > maxVal ||
      (currentVal === maxVal && Number(currentKey) < Number(maxKey))
    ) {
      return currentKey;
    }
    return maxKey;
  });
  return Number(highestKey);
}

migratoryBirds(arr);
