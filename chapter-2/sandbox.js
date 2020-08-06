// 17) Type Conversion

let score = '100';
console.log(typeof score); // string
console.log(score + 1); // 1001

score = Number(score);
console.log(typeof score); // number
console.log(score + 1); // 101

// let result = Number('hello'); //NaN
// let result = String(50); // '50'
// let result = Boolean(100); // any num is true, but 0 is false
let result = Boolean('0'); // strings of any length is true, but empty string is false

console.log(result, typeof result);