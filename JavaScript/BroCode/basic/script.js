document.getElementById("superman").textContent = "Superman";
document.getElementById("super").textContent =
  "First DCU movie directed by James Gunn";

// accept user input
// const userName = prompt("What is your name?");
// console.log(userName);

document.getElementById("username").value;

document.getElementById("btn").onclick = function () {
  const name = document.getElementById("ip").value;
  document.getElementById("username").textContent = `Hello ${name}`;
};

// counter app
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");
const incrementBtn = document.getElementById("incrementBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

decrementBtn.onclick = function () {
  count -= 1;
  countLabel.textContent = count;
};

resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};

incrementBtn.onclick = function () {
  count += 1;
  countLabel.textContent = count;
};

//random number
const randomBtn = document.getElementById("randomBtn");
const numLabel = document.getElementById("numLabel");
let randomNumber;
const min = 1;
const max = 6;

randomBtn.onclick = function () {
  randomNumber = Math.floor(Math.random() * max) + min;
  numLabel.textContent = randomNumber;
};

// checked
const subscribe = document.getElementById("subscribe");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const subResult = document.getElementById("subResult");
const radioResult = document.getElementById("radioResult");
const checkBtn = document.getElementById("checkBtn");

checkBtn.onclick = function () {
  if (subscribe.checked) {
    subResult.textContent = "Subscribed";
  } else {
    subResult.textContent = "Not Subscribed";
  }

  if (visaBtn.checked) {
    radioResult.textContent = "you have selected visa card";
  } else if (masterBtn.checked) {
    radioResult.textContent = "you have selected master card";
  } else {
    radioResult.textContent = "please select a card";
  }
};

// ternary operator
const age = 18;
const canVote = age >= 18 ? "yes" : "no";
console.log(canVote);

//string methods
let gamerName = "Peacemaker";
let phomeNumber = "123-456-7890";

console.log(gamerName.charAt(3)); // returns c
console.log(gamerName.indexOf("a")); // returns 2
console.log(gamerName.lastIndexOf("a")); // returns 6
console.log(gamerName.length); // returns 10 // not a method exactly
console.log(gamerName.toUpperCase()); // returns PEACEMAKER
console.log(gamerName.toLowerCase()); // returns peacemaker
console.log(gamerName.repeat(3)); // returns PeacemakerPeacemakerPeacemaker
console.log(gamerName.startsWith("h")); // returns false
console.log(gamerName.endsWith("r")); // returns true
console.log(gamerName.includes("k")); // returns true
console.log(phomeNumber.replaceAll("-", "")); // returns 1234567890
console.log(phomeNumber.padStart(15, "0")); // returns 00000001234567890

gamerName.trim(); // used to remove white spaces before or after the string

// string slicing
const fullName = "Bruce Wayne";

let firstName = fullName.slice(0, 5); // returns Bruce
// or
let firstName2 = fullName.slice(0, fullName.indexOf(" ")); // returns Bruce

let lastName = fullName.slice(6); // returns Wayne
let lastChar = fullName.slice(-1); // returns e

console.log(firstName);
console.log(firstName2);
console.log(lastName);
console.log(lastChar);

//method chaining
let hero = " sUpeRMan   ";

// Not using method chaining
hero = hero.trim();
let firstLetter = hero.charAt(0);
firstLetter = firstLetter.toUpperCase();
let restOfName = hero.slice(1);
restOfName = restOfName.toLowerCase();
hero = firstLetter + restOfName;
console.log(hero);

// Using method chaining
hero = hero.trim().charAt(0).toUpperCase() + hero.slice(1).toLowerCase();
console.log(hero);

// number gussing game
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let guess;
let attempts = 0;
let running = true;

// while (running) {
//   guess = window.prompt(`Enter a number between ${minNum} and ${maxNum}`);
//   guess = Number(guess);

//   if (isNaN(guess)) {
//     window.alert("Please enter a valid number");
//   } else if (guess < minNum || guess > maxNum) {
//     window.alert(`Please enter a number between ${minNum} and ${maxNum}`);
//   } else {
//     attempts++;
//     if (guess < answer) {
//       window.alert("Go higher");
//     } else if (guess > answer) {
//       window.alert("Go lower");
//     } else {
//       window.alert(`Answer is ${answer} & You got it in ${attempts} attempts`);
//       running = false;
//     }
//   }
// }

// spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
console.log(maximum);

// rest parameter
function menu(...foods) {
  console.log(foods);
}

const food1 = "pizza";
const food2 = "burger";
const food3 = "pasta";

menu(food1, food2, food3);
