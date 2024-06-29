var c = 200;
let a = "harshil";

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

console.log("----------------------------------------------------------------");

function one() {
  const username = "harshil";
  function two() {
    const role = "WebDev";
    console.log(username);
  }
  // console.log(role);
  two();
}
one();

console.log("----------------------------------------------------------------");

if (true) {
  const heroName = "Batman";
  if (heroName === "Batman") {
    const universe = "DC";
    console.log(`${heroName} is belongs to ${universe} universe.`);
  }
  // console.log(universe);
}
//console.log(heroName);
