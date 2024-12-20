// reverse the string using js.

let str = "minecraft is a pc game";

let reversedstr = str.split(" ").map((word) => {
  return word.split("").reverse().join("");
});

console.log(reversedstr.join(" "));

console.log("---------------------------------------------------");

// how to check is given object is array or not?

function checkArray(elem) {
  console.log(Array.isArray(elem));
}

checkArray([]);
checkArray({});

console.log("---------------------------------------------------");
