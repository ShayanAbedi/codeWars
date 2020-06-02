function persistence(num) {
  let count = 0;

  while (num >= 10) {
    let numbers = ("" + num).split("");
    let multiple = 1;
    numbers.forEach((n) => {
      multiple = multiple * +n;
    });
    count++;
    num = multiple;
  }
  return count;
}


// function persistence(num) {
  
// }

console.log(persistence(39), 3);
console.log(persistence(4), 0);
console.log(persistence(25), 2);
console.log(persistence(999), 4);
