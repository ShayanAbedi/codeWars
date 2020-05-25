const zero = (op) => (!op ? 0 : op(0));
const one = (op) => (!op ? 1 : op(1));
const two = (op) => (!op ? 2 : op(2));
const three = (op) => (!op ? 3 : op(3));
const four = (op) => (!op ? 4 : op(4));
const five = (op) => (!op ? 5 : op(5));
const six = (op) => (!op ? 6 : op(6));
const seven = (op) => (!op ? 7 : op(7));
const eight = (op) => (!op ? 8 : op(8));
const nine = (op) => (!op ? 9 : op(9));

const plus = (num) => (num2) => num2 + num;
const minus = (num) => (num2) => num2 - num;
const times = (num) => (num2) => num2 * num;
const dividedBy = (num) => (num2) => Math.floor(num2 / num);

console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(six(dividedBy(two())), 3);
