function accum(s) {
  const ch = s.split(""); //split the word to the single characters and store them as an array

  //iterate over the array of characters
  //and pass them one-by-one to 'repeat' function
  for (let i = 0; i < ch.length; i++) {
    let newCh = repeat(ch[i], i);
    ch[i] = newCh;
  }
  return ch.join("-");
}

function repeat(character, index) {
  let newCh = "";
  for (let i = 0; i <= index; i++) {
    newCh += character;
    newCh = cap(newCh.toLowerCase()); //pass the repeated lower cased character to the cap function
  }
  return newCh;
}

function cap(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//test
console.log(accum("ZpglnRxqenU"));
//   "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
