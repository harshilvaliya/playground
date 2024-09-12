// map

const numbers = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10];

let doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers);

console.log("---------------------------------------------------------------");

doubledNumbers = doubledNumbers
  .map((num) => num * 2)
  .map((num) => num + 2)
  .filter((num) => num > 30);

console.log(doubledNumbers);
