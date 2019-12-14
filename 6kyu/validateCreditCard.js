function validate(n) {
  //alg 1
  let valid = false;
  let numberArr = n.toString().split("");
  let sum = 0;
  for (let i = 0; i < numberArr.length; i++) {
    if (numberArr.length % 2 === 0) {
      if (i % 2 === 0) {
        numberArr[i] = numberArr[i] * 2;
        if (numberArr[i] > 9) {
          numberArr[i] -= 9;
        }
      }
    } else {
      if (i % 2 != 0) {
        numberArr[i] = numberArr[i] * 2;
        if (numberArr[i] > 9) {
          numberArr[i] -= 9;
        }
      }
    }
    sum += parseInt(numberArr[i]);
  }
  //   console.log(sum);

  if (sum % 10 === 0) {
    valid = true;
  }
  return valid;
}

console.log(validate(1714), false);
console.log(validate(12345), false);
console.log(validate(891), false);

console.log(validate(123), false);
console.log(validate(1), false);
console.log(validate(2121), true);
console.log(validate(1230), true);
