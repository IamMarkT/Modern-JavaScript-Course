// 43) primative vs reference types

// primative values, will change values

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 84;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);



// reference value, won't change values because of pointers

userOne = { name : 'mark', age : 22};
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 40;
console.log(userOne, userTwo);
