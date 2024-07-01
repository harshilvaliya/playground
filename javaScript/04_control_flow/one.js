//if

if (true) {
  console.log("executed");
}

console.log("----------------------------------------------------------------");

if (2 != 3) {
  console.log("this statement is true");
}

console.log("----------------------------------------------------------------");

const temperature = 38;

if (temperature > 40) {
  console.log("It's greater than 40");
} else {
  console.log("It's less than 40");
}

console.log("----------------------------------------------------------------");

let score = 200;

if (score > 100) {
  const power = "speed";
  console.log(`The Gamer got ${power}.`);
}

console.log("----------------------------------------------------------------");

let balance = 1000;

if (balance > 100) console.log("not right way to write code in production");

console.log("----------------------------------------------------------------");

let val = 1000;

if (val < 500) {
  console.log("less tha 500");
} else if (val < 750) {
  console.log("less tha 750");
} else if (val < 900) {
  console.log("less tha 900");
} else {
  console.log("less tha 1200");
}

console.log("----------------------------------------------------------------");

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
  if (userLoggedIn && debitCard) {
    console.log("Allow user to shopping");
  }
} else {
  console.log("User not logged in");
}
