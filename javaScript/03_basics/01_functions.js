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

function addTwoNumber(number1, number2) {
  return number1 + number2;
}

const result2 = addTwoNumber(3, 3);
console.log("Result2:", result2);

console.log("----------------------------------------------------------------");

function loginUserGreetings(userName) {
  return `Welcome to our site dear ${userName} !`;
}

console.log(loginUserGreetings("Harshil"));
console.log(loginUserGreetings(""));
console.log(loginUserGreetings());

console.log("----------------------------------------------------------------");

function loginUserGreetings(userName) {
  if (userName === undefined) {
    console.log("please enter a user name");
    return;
  }
  return `Welcome to our site dear ${userName} !`;
}

console.log(loginUserGreetings());
console.log(loginUserGreetings("Harshil"));

// if we pass by default value in parameters then it never goes into if block
function loginUserGreetings(userName = "john") {
    //code
}
