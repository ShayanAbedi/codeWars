// function spinWords(sentence) {
//   let str = sentence.split(" ");
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].length >= 5) {
//       str[i] = str[i].split("").reverse().join("");
//     }
//   }
//   return str.join(" ");
// }

function spinWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      if (word.length >= 5) {
        return word.split("").reverse().join("");
      }
      return word;
    })
    .join(" ");
}

console.log(spinWords("Welcome"), "emocleW");
console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
console.log(spinWords("This is a test"), "This is a test");
