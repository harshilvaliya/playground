// simple string concatenation.
const name = "Batman";
const age = 30;

console.log(name + " is " + age + " years old."); // outdated [String concatenation]
console.log(`${name} is ${age} years old.`); // modern way to write [String interpolation]

console.log("----------------------------------------------------------------");

// other way to define strings
const heroName = new String("Superman");
console.log(heroName);
console.log(heroName[4]);
console.log(heroName.__proto__);
console.log(heroName.length);
console.log(heroName.toUpperCase()); //
console.log(heroName.charAt(5));
console.log(heroName.indexOf("a"));

console.log("----------------------------------------------------------------");

const subString = heroName.substring(0, 5);
console.log(subString);

console.log("----------------------------------------------------------------");

const stringSlice = heroName.slice(-7, 3);
console.log(stringSlice);

console.log("----------------------------------------------------------------");

const spaceString = "       peacemaker  ";
console.log(spaceString);
console.log(spaceString.trim());

console.log("----------------------------------------------------------------");

const url = "http://harshil%20valiya.com";
console.log(url.replace("%20", "-"));
console.log(url.includes("harshil"));
console.log(url.includes("vercel"));

console.log("----------------------------------------------------------------");

const str = "harshil-valiya-vercel app";
console.log(str.split("-"));
console.log(str.split(" "));

console.log("----------------------------------------------------------------");
// comparison

let a = 10;
let b = 2;

if (a < b) {
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is equal to ${b}`);
}
