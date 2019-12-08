function century(year) {
  let century = 1;
  if (year >= 50) {
    century = Math.ceil(year / 100);
  }
  return century;
}

console.log(century(1705), 18);
console.log(century(1900), 19);
console.log(century(1601), 17);
console.log(century(2000), 20);
console.log(century(89), 1);
