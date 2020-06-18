// 16) Loose vs Strict Comparison

let age = 22;

// loose comparison (different types can still be equal)
console.log(age == 22); // true
console.log(age == '22'); // true

console.log(age != 22); // false
console.log(age != '22'); //false

// strict comparison (different types cannot be equal)
console.log(age === 22); // true
console.log(age === '22'); // false

console.log(age !== 22); // false
console.log(age !== '22'); // true