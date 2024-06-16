// singleton

const symbolOne = Symbol("hero1");

// object literals
const user1 = {
  name: "Harshil",
  "full name": "Harshil Valiya",
  [symbolOne]: "superman",
  age: 20,
  location: "Gujarat",
  email: "harshil@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Friday"],
};

console.log(user1.email);
console.log(user1["email"]);
// console.log(user1.full name); // can't access full name like this
console.log(user1["full name"]);

console.log("----------------------------------------------------------------");

console.log(user1[symbolOne]);
console.log(typeof user1[symbolOne]);

console.log("----------------------------------------------------------------");

user1.age = 21; //to override current value
console.log(user1.age);

Object.freeze(user1);

user1.age = 22;
console.log(user1.age);

console.log("----------------------------------------------------------------");

console.log(user1);

console.log("----------------------------------------------------------------");

const user2 = {
  name: "Peter",
  age: 20,
  email: "peter@gmail.com",
};

user2.greetings = function () {
  console.log(`Hello ${this.name}!`); // this refers to the user2
};

console.log(user2.greetings());
console.log(user2.greetings);
