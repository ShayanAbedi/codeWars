function pigIt(str) {
  return str
    .split(" ")
    .map((word) =>
      !word.match(/\?|!/g) ? word.slice(1) + word[0] + "ay" : word
    )
    .join(" ");
}

console.log(pigIt("Pig latin is cool !"), "igPay atinlay siay oolcay");
console.log(pigIt("This is my string ?"), "hisTay siay ymay tringsay");
