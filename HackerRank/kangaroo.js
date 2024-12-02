function kangaroo(x1, v1, x2, v2) {
  let hop = 1;

  while (hop < 10000) {
    let k1 = x1 + v1 * hop;
    let k2 = x2 + v2 * hop;

    if (k1 == k2) {
      return "YES";
    } else {
      hop++;
    }
  }
  return "NO";
}

kangaroo(x1, v1, x2, v2);
