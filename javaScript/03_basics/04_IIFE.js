// Immediately Invoked Function Expression (IIFE)

(function greet() { //named iife
  console.log("Learning about IIFE!");
})();

// syntax
// ()();
// semi colon is necessary

console.log("----------------------------------------------------------------");

((name) => { //simple iife
  console.log(`Hey ${name}`);
})("harshil");
