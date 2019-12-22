//v1
function iqTest(numbers) {
  numbers = numbers.split(" ");

  let evens = [];
  let odds = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evens.push(i + 1);
    } else {
      odds.push(i + 1);
    }
  }
  return evens.length > odds.length ? odds[0] : evens[0];
}

//v2
function iqTest(numbers) {
  let evens = [];
  let odds = [];
  numbers
    .split(" ")
    .map((number, index) =>
      number % 2 === 0 ? evens.push(index + 1) : odds.push(index + 1)
    );
  return evens.length > odds.length ? odds[0] : evens[0];
}

//tests
console.log(iqTest("2 4 7 8 10"), 3);
console.log(iqTest("1 2 2"), 1);
console.log(iqTest("1 2 1 1"), 2);
