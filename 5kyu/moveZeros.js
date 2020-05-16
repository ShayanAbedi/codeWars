var moveZeros = function (arr) {
  let newArr = []; // the new movedZeros array
  let numberOfZeros = 0; // count the number of zeros

  arr.forEach((element) => {
    if (element === 0) {
      numberOfZeros++;
    } else {
      newArr.push(element);
    }
  });
  // check to see if all the elements in the array are 0s
  // if yes > return the original array
  if (numberOfZeros === arr.length) {
    return arr;
  }
  // else push 0s to the new array
  else {
    for (let i = 0; i < numberOfZeros; i++) {
      newArr.push(0);
    }
    return newArr;
  }
};

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]), [
  1,
  2,
  1,
  1,
  3,
  1,
  0,
  0,
  0,
  0,
]);
console.log(moveZeros([0, 0, 0, 0]), [0, 0, 0, 0]);
