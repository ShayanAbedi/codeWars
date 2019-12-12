function tickets(peopleInLine) {
  const bills = {
    25: 0,
    50: 0,
    100: 0
  };
  for (let i = 0; i < peopleInLine.length; i++) {
    const paid = peopleInLine[i];
    if (paid === 25) {
      bills[paid]++;
    } else if (paid === 50 && bills[25] > 0) {
      bills[25]--;
      bills[paid]++;
    } else if (paid === 100) {
      if (bills[25] > 0 && bills[50] > 0) {
        bills[25]--;
        bills[50]--;
        bills[paid]++;
      } else if (bills[25] > 2) {
        bills[25] -= 3;
        bills[paid]++;
      } else {
        return "NO";
      }
    } else {
      return "NO";
    }
  }
  return "YES";
}

console.log(tickets([25, 25, 50])); // => YES
console.log(tickets([25, 100])); // => NO
console.log(
  tickets([25, 25, 50, 100, 25, 25, 50, 100, 25, 50, 25, 100, 25, 100, 100])
); //no
