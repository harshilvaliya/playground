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
