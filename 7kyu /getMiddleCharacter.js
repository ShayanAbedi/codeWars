function getMiddle(s) {
  const len = s.length;
  if (len % 2 === 0) {
    const newLen = len / 2;
    return s[newLen - 1] + s[newLen];
  } else {
    const nLen = Math.floor(len / 2);
    return s[nLen];
  }
}

console.log(getMiddle("test"), "es");
console.log(getMiddle("testing"), "t");
console.log(getMiddle("middle"), "dd");
console.log(getMiddle("A"), "A");
