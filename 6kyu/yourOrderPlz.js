function order(words) {
  let word = words.split(" ");
  let lettersObj = {};
  word.forEach(w => {
    for (let i = 0; i < w.length; i++) {
      if (!isNaN(w[i])) {
        lettersObj[w] = w[i];
      }
    }
  });
  let keysSorted = Object.keys(lettersObj).sort(function(a, b) {
    return lettersObj[a] - lettersObj[b];
  });
  return keysSorted.join(" ");
}
console.log(order("is2 Thi1s T4est 3a"));
