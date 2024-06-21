let score1 = 40;
console.log(typeof score1);

let score2 = "40abc";
console.log(typeof score2);

let score1InNumber = Number(score1);
console.log(typeof score1InNumber);

let score2InNumber = Number(score2);
console.log(typeof score2InNumber);
console.log(score2InNumber);

let score3 = null;
let score3InNumber = Number(score3);
console.log(score3InNumber);
console.log(typeof score3InNumber);

/*
"12" => 12
"12abc" => NaN
true => 1 ; false => 0
"" => false ; "abc" => true
*/

// ------------- Operation ------------- //
console.log("----------------------------------------------------------------");

let value = 6;
let negValue = -value;
console.log(negValue);
console.log(2 + 3); //basic arithmetic operations

console.log("----------------------------------------------------------------");

let str1 = "harshil";
let str2 = "valiya";

let str3 = str1 + " " + str2;
console.log(str3);

console.log("----------------------------------------------------------------");

console.log(1 + 3);
console.log(1 + "3");
console.log("1" + 3);
console.log(1 + 3 + 2);
console.log("1" + 3 + 2);
console.log(1 + 3 + "2"); //not appropriate way to write the code

//following way is to write the code
console.log((1 + 3 + 2) * (1 % 3));

console.log("----------------------------------------------------------------");

console.log(+true);
console.log(+"");
