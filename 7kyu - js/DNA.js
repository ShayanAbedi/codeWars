function DNAStrand(dna) {
  //your code here
  let letters = dna.split("");
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === "A") letters[i] = "T";
    else if (letters[i] == "T") letters[i] = "A";
    else if (letters[i] == "C") letters[i] = "G";
    else if (letters[i] == "G") letters[i] = "C";
  }
  return letters.join("");
}

console.log(DNAStrand("AAAA"));
console.log(DNAStrand("ATTGC"), "TAACG", "String ATTGC is");
console.log(DNAStrand("GTAT"), "CATA", "String GTAT is");
