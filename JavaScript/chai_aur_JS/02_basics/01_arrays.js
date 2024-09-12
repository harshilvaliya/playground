const array1 = new Array(1, 2, 3, 4, 5);
const dcHeros = ["Superman", "Batman", "Flash"];

console.log(array1);
console.log(dcHeros);

console.log("----------------------------------------------------------------");

console.log(dcHeros[1]);
console.log(dcHeros.length);

console.log("----------------------------------------------------------------");
// array methods

const array2 = [0, 2, 4, 6, 8, 10];

array2.push(12);
console.log(array2);

console.log("----------------------------------------------------------------");

array2.pop();
console.log(array2);

console.log("----------------------------------------------------------------");

// array2.unshift(1);
// console.log(array2);

array2.shift();
console.log(array2);

console.log("----------------------------------------------------------------");

console.log(array2.includes(5));
console.log(array2.indexOf(4));

console.log("----------------------------------------------------------------");

const newArray = array2.join();
console.log(newArray);
console.log(typeof newArray);
//convert array2 to string.

console.log("----------------------------------------------------------------");
//slice , splice

const array3 = [1, 2, 3, 4, 5, 6, 7];

console.log(array3.slice(1, 4));
console.log(array3.splice(1, 4)); //cut the values from original array

