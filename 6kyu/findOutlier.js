function findOutlier(integers) {
  let isEven = false;
  if (
    (integers[0] % 2 === 0 && integers[1] % 2 === 0) ||
    (integers[0] % 2 === 0 && integers[2] % 2 === 0) ||
    (integers[1] % 2 === 0 && integers[2] % 2 === 0)
  ) {
    isEven = true;
  }

  for (let i = 0; i < integers.length; i++) {
    if (isEven) {
      if (integers[i] % 2 !== 0) {
        return integers[i];
      }
    } else {
      if (integers[i] % 2 === 0) {
        return integers[i];
      }
    }
  }
}

function findOutlier(int) {
  var even = int.filter((a) => a % 2 == 0);
  var odd = int.filter((a) => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}

console.log(findOutlier([0, 1, 2]), 1);
console.log(findOutlier([1, 2, 3]), 2);
console.log(findOutlier([2, 6, 8, 10, 3]), 3);
console.log(findOutlier([0, 0, 3, 0, 0]), 3);
console.log(findOutlier([1, 1, 0, 1, 1]), 0);
