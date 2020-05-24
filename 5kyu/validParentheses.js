function validParentheses(parens) {
  let sum = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") {
      sum += 1;
    } else {
      sum += -1;
    }
    if (sum < 0) {
      return false;
    }
  }
  return sum === 0;
}

console.log(validParentheses("()"), true);
console.log(validParentheses(")("), false);
console.log(validParentheses("(())((()())())"), true);
console.log(validParentheses(")(()))"), false);
