//
// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Select DOM elements
const submitButton = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remainingGuesses = document.querySelector(".lastResult");
const feedbackMessage = document.querySelector(".lowOrHi");
const startOverContainer = document.querySelector(".resultParas");

// Create a new paragraph element for the new game button
const newGameButton = document.createElement("button");
newGameButton.textContent = "Start New Game";

// Initialize game variables
let previousGuesses = [];
let numberOfGuesses = 1;
let isPlaying = true;

// Event listener for the submit button
submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  const guess = parseInt(userInput.value);
  validateGuess(guess);
});

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1 || guess > 100) {
    alert("Please enter a number between 1 and 100");
  } else {
    previousGuesses.push(guess);
    if (numberOfGuesses === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. The random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("You guessed it right!");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is TOO low");
  } else {
    displayMessage("Number is TOO high");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.textContent += `${guess}, `;
  numberOfGuesses++;
  remainingGuesses.textContent = `${10 - numberOfGuesses} `;
}

function displayMessage(message) {
  feedbackMessage.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  newGameButton.classList.add("button");
  startOverContainer.appendChild(newGameButton);
  isPlaying = false;
  newGameButton.addEventListener("click", newGame);
}

function newGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  previousGuesses = [];
  numberOfGuesses = 1;
  guessSlot.textContent = "";
  remainingGuesses.textContent = `${10 - numberOfGuesses} `;
  userInput.removeAttribute("disabled");
  feedbackMessage.textContent = "";
  startOverContainer.removeChild(newGameButton);
  isPlaying = true;
}

// optimized solution
// // Generate a random number between 1 and 100
// let randomNumber = Math.floor(Math.random() * 100) + 1;

// // Select DOM elements
// const submitButton = document.querySelector("#subt");
// const userInput = document.querySelector("#guessField");
// const guessSlot = document.querySelector(".guesses");
// const remainingGuesses = document.querySelector(".lastResult");
// const feedbackMessage = document.querySelector(".lowOrHi");
// const startOverContainer = document.querySelector(".resultParas");

// // Create a new paragraph element for the new game button
// const newGameButton = document.createElement("p");

// // Initialize game variables
// let previousGuesses = [];
// let numberOfGuesses = 1;
// let isPlaying = true;

// // Event listener for the submit button
// if (isPlaying) {
//   submitButton.addEventListener("click", function (e) {
//     e.preventDefault();
//     const guess = parseInt(userInput.value);
//     console.log(guess);
//     validateGuess(guess);
//   });
// }

// function validateGuess(guess) {
//   if (isNaN(guess)) {
//     alert("Please enter a valid number");
//   } else if (guess < 1) {
//     alert("Please enter a number more than 1");
//   } else if (guess > 100) {
//     alert("Please enter a number less than 100");
//   } else {
//     previousGuesses.push(guess);
//     if (numberOfGuesses === 11) {
//       displayGuess(guess);
//       displayMessage(`Game Over. The random number was ${randomNumber}`);
//       endGame();
//     } else {
//       displayGuess(guess);
//       checkGuess(guess);
//     }
//   }
// }

// function checkGuess(guess) {
//   if (guess === randomNumber) {
//     displayMessage("You guessed it right!");
//     endGame();
//   } else if (guess < randomNumber) {
//     displayMessage("Number is TOO low");
//   } else {
//     displayMessage("Number is TOO high");
//   }
// }

// function displayGuess(guess) {
//   userInput.value = "";
//   guessSlot.innerHTML += `${guess}, `;
//   numberOfGuesses++;
//   remainingGuesses.innerHTML = `${11 - numberOfGuesses} `;
// }

// function displayMessage(message) {
//   feedbackMessage.innerHTML = `<h2>${message}</h2>`;
// }

// function endGame() {
//   userInput.value = "";
//   userInput.setAttribute("disabled", "");
//   newGameButton.classList.add("button");
//   newGameButton.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
//   startOverContainer.appendChild(newGameButton);
//   isPlaying = false;
//   newGame();
// }

// function newGame() {
//   const newGameButtonElement = document.querySelector("#newGame");
//   newGameButtonElement.addEventListener("click", function () {
//     randomNumber = Math.floor(Math.random() * 100) + 1;
//     previousGuesses = [];
//     numberOfGuesses = 1;
//     guessSlot.innerHTML = "";
//     remainingGuesses.innerHTML = `${11 - numberOfGuesses} `;
//     userInput.removeAttribute("disabled");
//     startOverContainer.removeChild(newGameButton);

//     isPlaying = true;
//   });
// }

//given solution
/*
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("PLease enter a valid number");
  } else if (guess < 1) {
    alert("PLease enter a number more than 1");
  } else if (guess > 100) {
    alert("PLease enter a  number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
*/
