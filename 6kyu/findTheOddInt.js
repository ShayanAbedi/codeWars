function findOdd(A) {
  const list = {};
  A.forEach((element) => {
    list[element] ? list[element]++ : (list[element] = 1);
  });
  const entries = Object.entries(list);
  for (const [int, count] of entries) {
    if (count % 2 !== 0) {
      return parseInt(int);
    }
  }
}
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

console.log(
  findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]),
  5
);
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), -1);
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]), 5);
console.log(findOdd([10]), 10);
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]), 10);
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), 1);
