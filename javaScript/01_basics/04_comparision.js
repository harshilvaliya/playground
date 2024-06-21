console.log("21" > 3);

console.log(null > 0);
console.log(null == 0); // it is equality check
console.log(null >= 0); // it is comparison check

/* 
equality and comparison check works differently.
comparison check convert null to number and treat null as zero.
*/

console.log(undefined == 0);

// strict check

console.log("2" === 2);
// this is === operator compare strictly with datatype of both sides
