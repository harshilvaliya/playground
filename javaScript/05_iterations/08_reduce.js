// reduce

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, currValue) => acc + currValue, 0);
console.log(sum); // Output: 15

/*
const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
);
*/

console.log("---------------------------------------------------------------");

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

const totalPrice = products.reduce((acc, item) => acc + item.price, 0);

console.log(totalPrice); // Output: 60
