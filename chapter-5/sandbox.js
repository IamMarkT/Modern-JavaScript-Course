// 38) object literals

let user = {
    name: 'mark', // key: value
    age: 22, 
    email: 'markt1084@gmail.com',
    location: 'orlando',
    blogs: ['why mac & cheese rules', '10 rules to life']
};

console.log(user);
console.log(user.name);

user.age = 35;
console.log(user.age);

const key = 'location';
console.log(user[key]);

user['name'] = 'lester';
console.log(user['name']);

console.log(typeof user); // object
