const userEmail = "harshil@gmail.com";

if (userEmail) {
  console.log("got user email");
} else {
  console.log("don't have user email");
}

console.log("----------------------------------------------------------------");

const user = "";

if (user) {
  console.log("got user");
} else {
  console.log("don't have user");
}

/* 
falsy values are;
false, NaN, null, undefined, 0, -0, Big Int 0n , ""
*/

/* 
truthy values are;
truth, " ", "0", 'false', [], {}, function(){} , all the values which are not falsy are truthy values.
*/

console.log("----------------------------------------------------------------");

const myObj = {};

if (Object.keys(myObj).length === 0) {
  console.log("object is empty");
}

console.log("----------------------------------------------------------------");

// Nullish Coalescing Operator (??) null, undefined

let val1 = null ?? 10;

console.log(val1);

console.log("----------------------------------------------------------------");

// Ternary Operators

// condition ? true : false

let chaiPrice = 100;

chaiPrice >= 80
  ? console.log("it is very expensive")
  : console.log("it is affordable");
