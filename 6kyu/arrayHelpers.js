Array.prototype.square = function() {
  return this.map(i => i ** 2);
};
Array.prototype.cube = function() {
  return this.map(i => i ** 3);
};
Array.prototype.sum = function() {
  let sum = 0;
  this.map(i => (sum += i));
  return sum;
};
Array.prototype.average = function() {
  if (this.length > 0) {
    let sum = 0;
    this.map(i => (sum += i));
    return sum / this.length;
  } else {
    return NaN;
  }
};
// Array.prototype.even = function() {
//   let evenNums = [];
//   this.map(i => {
//     if (i % 2 === 0) {
//       evenNums.push(i);
//     }
//   });
//   return evenNums;
// };
Array.prototype.even = function() {
  return this.filter(i => i % 2 === 0);
};
// Array.prototype.odd = function() {
//   let oddNums = [];
//   this.map(i => {
//     if (i % 2 != 0) {
//       oddNums.push(i);
//     }
//   });
//   return oddNums;
// };
Array.prototype.odd = function() {
  return this.filter(i => i % 2 != 0);
};

var numbers = [1, 2, 3, 4, 5];
console.log(numbers.square());
console.log(numbers.cube());
console.log(numbers.sum());
console.log(numbers.average());
console.log(numbers.even());
console.log(numbers.odd());
