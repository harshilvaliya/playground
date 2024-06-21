const marvelHeros = ["Spider-Man", "Iron Man", "Thor"];
console.log(marvelHeros);

const dcHeroes = ["Superman", "Batman", "Robin"];
console.log(dcHeroes);

/*
console.log("-------------------------------------------");
// not a right way
marvelHeros.push(dcHeroes);
console.log(marvelHeros);
*/

console.log("---------------------------------------------------------------");
const allHeroes1 = marvelHeros.concat(dcHeroes);
console.log(allHeroes1);

console.log("---------------------------------------------------------------");
//spread operator. right wat to merge arrays
const allHeroes2 = [...marvelHeros, ...dcHeroes];
console.log(allHeroes2);

console.log("---------------------------------------------------------------");
const boysHeros = ["HomeLander", "StarLight", "A-Train"];
const allHeroes3 = [...marvelHeros, ...dcHeroes, ...boysHeros];
console.log(allHeroes3);

console.log("---------------------------------------------------------------");
const nestedArray = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12], 31], 324, 42];
console.log(nestedArray.flat(Infinity));

console.log("---------------------------------------------------------------");
console.log(Array.isArray("SUPERMAN"));
console.log(Array.from("SUPERMAN"));

console.log("---------------------------------------------------------------");
let score1 = 100,
  score2 = 200,
  score3 = 300;

const allScore = Array.of(score1, score2, score3);
console.log(allScore);
