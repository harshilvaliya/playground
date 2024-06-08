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
