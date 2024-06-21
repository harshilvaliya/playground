/* Two types of memories are : 
    Stack (Primitive)
    Heap (Non-Primitive)
*/

let normalName = "Bruce";
let superheroName = normalName;
superheroName = "Batman";

console.log(normalName);
console.log(superheroName);

console.log("----------------------------------------------------------------");

let heroOne = {
  name: "Batman",
  universe: "DC",
};

let heroTwo = heroOne;

console.log(heroOne);
console.log(heroTwo);

console.log("----------------------------------------------------------------");

heroTwo.name = "Spider-man";

console.log(heroOne);
console.log(heroTwo);

/*
in stack we will have copy of the original values 
and in the heap we have direct reference to the original values.
so when we change the values from reference, that value will be changed in everywhere. 
*/
