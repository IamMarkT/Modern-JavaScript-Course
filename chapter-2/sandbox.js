// 13) Arrays
let ninjas = ['mark', 'sean', 'dennis'];

// ninjas[0] = 'lester'
// console.log(ninjas[0]);

let ages = [20,25,30,35];
console.log(ages[1]);


let random = ['shaun', 'crystal', 25, 30];
console.log(random);
console.log(ninjas.length); // length in int

// ARRAY METHODS

// let result = ninjas.join(', '); // join creates string with seperator
// let result = ninjas.indexOf('sean'); // returns int of where
// let result = ninjas.concat(['ash', 'siri']); // concatenates arrays
let result = ninjas.push('ken'); // returns length in int, but adds new value to array
result = ninjas.pop(); // removes and returns last value in array

console.log(result);

