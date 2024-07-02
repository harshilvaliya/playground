// for in loop

const myObject = {
  hero1: "Batman",
  hero2: "Superman",
  hero3: "Flash",
  hero4: "Robin",
};

for (const key in myObject) {
  console.log(`${key}'s name is ${myObject[key]}`);
}

console.log("----------------------------------------------------------------");

const myArray = ["Batman", "Superman", "Flash", "Robin"];

for (const key in myArray) {
  console.log(myArray[key]);
}

