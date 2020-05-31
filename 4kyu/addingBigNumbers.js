function add(a, b) {
  const maxLength = Math.max(a.length, b.length); //finding the number with more length
  // pad the start of the number with the lower length with 0
  a = a.padStart(maxLength, "0");
  b = b.padStart(maxLength, "0");

  const aDigits = [...a];
  const bDigits = [...b];

  const answer = []; // final answer
  let carry = 0;
  for (let i = maxLength - 1; i >= 0; i--) {
    const res = +aDigits[i] + +bDigits[i] + carry;
    if (res < 10) {
      answer.unshift(res);
      carry = 0;
    } else {
      answer.unshift(res % 10);
      carry = 1;
    }
  }
  if (carry) {
    answer.unshift(carry);
  }
  return answer.join("");
}

console.log(add("123", "456"), "579");
console.log(add("888", "222"), "1110");
console.log(add("1371", "69"), "1441");
console.log(add("12", "456"), "468");
console.log(add("101", "100"), "201");
console.log(
  add("63829983432984289347293874", "90938498237058927340892374089"),
  "91002328220491911630239667963"
);
console.log(add("1", "1"), "2");
