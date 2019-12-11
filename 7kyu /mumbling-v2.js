function accum(s) {
  const ch = s.split(""); //split the word to the single characters and store them as an array
  ch[0] = ch[0].toUpperCase();
  //iterate over the array of characters
  //and pass them one-by-one to 'repeat' function
  for (let i = 1; i < ch.length; i++) {
    ch[i] += ch[i].repeat(i);
    ch[i] = cap(ch[i].toLowerCase());
  }
  return ch.join("-");
}

function cap(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
//test
console.log(accum("ZpglnRxqenU"));
//   "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
