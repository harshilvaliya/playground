//PRIMITIVE DATATYPES:-
//String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.3;
const Temp = null;
const isLoggedIn = false;
let email;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id == anotherId);

// REFERENCE DATATYPES (Non-Primitive) :-
// Array, Object, Function

const heros = ["batman", "flash", "superman"]; //array

const person = {
  name: "harshil",
  age: 20,
  city: "Mahuva",
}; // Object

const myFunction = function () {
  console.log("this is my function");
}; // function

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/
