const value1 = 300;
console.log(value1);

console.log("----------------------------------------------------------------");

const value2 = new Number(400);
console.log(value2);
console.log(value2.toFixed(2));
console.log(value2.toString());

console.log("----------------------------------------------------------------");

const value3 = 53.5394;
console.log(value3.toPrecision(4));

console.log("----------------------------------------------------------------");

const value4 = 1934342;
console.log(value4.toLocaleString());
console.log(value4.toLocaleString("en-IN"));

console.log("----------------------------------------------------------------");

//---------------------------- MATHS ------------------------------------//

// console.log(Math);
console.log(Math.abs(-3));
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));
console.log(Math.min(4, 3, 2, 1, 1));
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1);

console.log("----------------------------------------------------------------");

const min = 5;
const max = 15;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
