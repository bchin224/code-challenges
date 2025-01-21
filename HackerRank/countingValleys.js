function countingValleys(steps, path) {
  let result = 0;
  let last = 0;
  let current = 0;

  for (let i = 0; i < steps; i++) {
    if (path[i] == "D") {
      current--;
    } else if (path[i] == "U") {
      current++;
    }
    // found a valley
    if (last == 0 && current < last) {
      result++;
    }
    last = current;
  }
  return result;
}

countingValleys(8, "UDDDUDUU");
