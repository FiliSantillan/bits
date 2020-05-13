// BigInt

const number = 9007199254740991;

const myBigInt = 9007199254740991n;
const otherBigInt = BigInt(9007199254740991);

console.log(myBigInt + 2n); // 9007199254740993n, OK!
console.log(otherBigInt + 2n); // 9007199254740993n, OK!
console.log(number + 2); // 9007199254740992, WTF!
