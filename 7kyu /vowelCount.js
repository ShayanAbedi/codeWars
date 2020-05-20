// function getCount(str) {
//   let vowelsCount = 0;
//   str = str.toLowerCase();
//   for (let i = 0; i < str.length; i++) {
//     switch (str[i]) {
//       case "a":
//         vowelsCount++;
//         break;
//       case "e":
//         vowelsCount++;
//         break;
//       case "i":
//         vowelsCount++;
//         break;
//       case "o":
//         vowelsCount++;
//         break;
//       case "u":
//         vowelsCount++;
//         break;
//       default:
//         break;
//     }
//   }
//   return vowelsCount;
// }
function getCount(str) {
  let vowelsCount = 0;
  const findIt = str.match(/a|i|e|u|o/gi);
  findIt ? (vowelsCount = findIt.length) : vowelsCount;
  return vowelsCount;
  //or in one line   return (str.match(/[aeiou]/ig)||[]).length;
}
console.log(getCount("my pyx"), 0);
console.log(getCount("pear tree"), 4);
