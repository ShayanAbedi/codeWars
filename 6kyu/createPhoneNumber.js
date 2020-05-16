function createPhoneNumber(numbers) {
  //#1 bruth force - very heigh O(n)
  //   let phoneNumber = '';
  //   numbers.splice(0,0,'(');
  //   numbers.splice(4,0,')');
  //   numbers.splice(5,0,' ');
  //   numbers.splice(9,0,'-');
  //   phoneNumber = numbers.join('');
  //  return phoneNumber;
  //#2
  let phoneNumber = "(";
  for (let i = 0; i < numbers.length; i++) {
    if (i === 2) {
      phoneNumber += numbers[i];
      phoneNumber += ") ";
    } else if (i === 5) {
      phoneNumber += numbers[i];
      phoneNumber += "-";
    } else {
      phoneNumber += numbers[i];
    }
  }
  return phoneNumber;
  //#3
  // let phoneNumber = "(";

  // phoneNumber += "" + numbers[0] + numbers[1] + numbers[2];
  // phoneNumber += ") ";

  // phoneNumber += "" + numbers[3] + numbers[4] + numbers[5];
  // phoneNumber += "-";

  // phoneNumber += "" + numbers[6] + numbers[7] + numbers[8] + numbers[9];

  // return phoneNumber;
}

console.log(
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
  "(123) 456-7890"
);
console.log(
  createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
  "(111) 111-1111"
);
console.log(
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
  "(123) 456-7890"
);
