// for of loops

myHeros = ["superman", "batman", "flash"];

for (const i of myHeros) {
  console.log(i);
}

console.log("----------------------------------------------------------------");

const message = "It's Hero Time!";

for (const char of message) {
  console.log(char);
}

console.log("----------------------------------------------------------------");

// maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United State of America");
map.set("Fr", "France");

console.log(map);
console.log("----------------------------------------------------------------");

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
