const user = {
  username: "harshil",
  price: 99,

  greeting: function () {
    console.log(`${this.username} , welcome to our platform`);
    console.log(this);
  },
};

// user.greeting();

// user.username = "Marco";
// user.greeting();
console.log(this);

console.log("----------------------------------------------------------------");

function Test() {
  let username = "sam";
  console.log(this);
  console.log(this.username);
}

Test(); // this keyword can't be used in function

console.log("----------------------------------------------------------------");

const check = () => {
  let username = "sam";
  console.log(this);
};

check(); // this keyword refers to the global object in browser or undefined in Node.js

console.log("----------------------------------------------------------------");

// method 1
/*
const addTwo = (num1, num2) => {
  return num1 + num2;
};

console.log(addTwo(2, 3));
*/

// method 2
/*
const addTwo = (num1, num2) => (num1 + num2);
console.log(addTwo(2, 3));
*/