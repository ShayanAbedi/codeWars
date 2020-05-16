function count(string) {
  const letters = string.split("");
  const counts = {};
  letters.forEach((letter) => {
    counts[letter] ? counts[letter]++ : (counts[letter] = 1);
  });
  return counts;
  // return Array.prototype.reduce.call(string, (counts, letter) => {
  //   counts[letter] ? counts[letter]++ : (counts[letter] = 1);
  //   return counts
  // },{})
}
console.log(count("ababcde"));
console.log(count(""));
