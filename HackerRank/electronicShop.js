function getMoneySpent(keyboards, drives, b) {
  let max = -1;

  for (let i = 0; i < keyboards.length; i++) {
    const keyboardprice = keyboards[i];

    for (let j = 0; j < drives.length; j++) {
      const drivesprice = drives[j];
      const total = keyboardprice + drivesprice;

      if (total <= b && total > max) {
        max = total;
      }
    }
  }
  return max;
}

getMoneySpent(60, [40, 50, 60], [5, 8, 12]);
