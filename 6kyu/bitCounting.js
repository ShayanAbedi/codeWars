var countBits = function (n) {
  const binary = n.toString(2).split("");
  return binary.filter((b) => b === "1").length;
};

console.log(countBits(0), 0);
console.log(countBits(4), 1);
console.log(countBits(7), 3);
console.log(countBits(9), 2);
console.log(countBits(10), 2);
