function sayMyName() {
  console.log("B");
  console.log("R");
  console.log("U");
  console.log("C");
  console.log("E");
}

sayMyName();

console.log("----------------------------------------------------------------");

/*
function addTwoNumber(number1, number2) {
  console.log(number1 + number2);
}

addTwoNumber(3, 5);
addTwoNumber(3, "5");
addTwoNumber(3, "a");
addTwoNumber(3, null);

console.log("----------------------------------------------------------------");
*/

function addTwoNumber(number1, number2) {
  let result = number1 + number2;
  return result;
}

const result = addTwoNumber(3, 5);
console.log("Result:", result);

console.log("----------------------------------------------------------------");

function addTwoNumb(number1, number2) {
  return number1 + number2;
}

const result2 = addTwoNumb(3, 3);
console.log("Result2:", result2);

console.log("----------------------------------------------------------------");

function loginUserGreetings1(userName) {
  return `Welcome to our site dear ${userName} !`;
}

console.log(loginUserGreetings1("Harshil"));
console.log(loginUserGreetings1(""));
console.log(loginUserGreetings1());

console.log("----------------------------------------------------------------");

function loginUserGreetings2(userName) {
  if (userName === undefined) {
    console.log("please enter a user name");
    return;
  }
  return `Welcome to our site dear ${userName} !`;
}

console.log(loginUserGreetings2());
console.log(loginUserGreetings2("Harshil"));

// if we pass by default value in parameters then it never goes into if block
function loginUserGreetings3(userName = "john") {
  //code
}

console.log("----------------------------------------------------------------");

function calculateCartItems(...price) {
  return price;
}

console.log(calculateCartItems(100, 3042, 22));

console.log("----------------------------------------------------------------");

const user1 = {
  name: "John",
  age: 30,
};

function getUserDetails(user) {
  console.log(`username is ${user.name} and user age is ${user.age}`);
}

getUserDetails(user1);
getUserDetails({
  name: "David",
  age: 25,
});

console.log("----------------------------------------------------------------");

function handleArray(array) {
  return array[3];
}

console.log(handleArray([123, 1444444444, "function", 234, "function"]));
