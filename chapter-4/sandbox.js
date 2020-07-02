// 35) Foreach Method and Callbacks

// const myFunc = (callbackFunc) => {
//     // do something
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(value => {
//     //do something
//     console.log(value);
// });

let people = ["mark", "mario", "luigi", "shaun"];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};


// people.forEach((person, index) => {
//     console.log(index, person);
// });

people.forEach(logPerson);