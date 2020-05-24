function arrayDiff(a, b) {
  for (let i = a.length; i >= 0; i--) {
    if (b.includes(a[i])) {
      a.splice(i, 1);
    }
  }
  return a;
}

function array_diff(a, b) {
  return a.filter((e) => !b.includes(e));
}

console.log(arrayDiff([], [4, 5]), []);
console.log(arrayDiff([3, 4], [3]), [4]);
console.log(arrayDiff([1, 8, 2], []), [1, 8, 2]);
