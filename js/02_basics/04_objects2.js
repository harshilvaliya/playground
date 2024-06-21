const user = new Object(); //singleton
const user1 = {}; // non-singleton

user1.id = "user1112";
user1.name = "Harshil";
user1.isLoggedIn = true;

console.log(user1);

console.log("----------------------------------------------------------------");

const user2 = {
  email: "user2@example.com",
  fullName: {
    userfullName: {
      firstname: "John",
      lastname: "Smith",
    },
  },
};

console.log(user2);
console.log(user2.fullName);
console.log(user2.fullName.userfullName);
console.log(user2.fullName.userfullName.firstname);

console.log("----------------------------------------------------------------");

const obj1 = { 1: "John", 2: "David" };
const obj2 = { 3: "Jack", 4: "James" };

// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

console.log("----------------------------------------------------------------");

const users = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "David",
  },
  {
    id: 3,
    name: "Jack",
  },
  {
    id: 4,
    name: "James",
  },
];

console.log(users[2].name);

console.log("----------------------------------------------------------------");

console.log(user1);
console.log(Object.keys(user1));
console.log(Object.values(user1));
console.log(user1.hasOwnProperty("isLoggedIn"));

console.log("----------------------------------------------------------------");

console.log(Object.keys(users));
console.log(Object.values(users));
console.log(Object.entries(users));

console.log("----------------------------------------------------------------");
//object destructuring

const movie = {
  title: "Inception",
  year: 2010,
  rating: 4.5,
  director: "Nolan",
};

const { title, rating: star } = movie;
console.log(title);
console.log(star);

console.log("----------------------------------------------------------------");
//JSON structure
/*
{
  "title": "Inception";
  "year": 2010;
  "rating": 4.5;
  "director": "Nolan";
};
*/
