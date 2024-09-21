function multiBy5(num) {
  return num * 5;
}

multiBy5.power = 3;

console.log(multiBy5.power);
console.log(multiBy5(5));
console.log(multiBy5.prototype);

/*
output :
3
25
{} [empty Object]
*/

console.log("-----------------------------------------------------");

function Item(name, price) {
  this.name = name;
  this.price = price;
}

Item.prototype.dencrementPrice = function () {
  this.price--;
};

Item.prototype.printItem = function () {
  console.log(`price of ${this.name} is ${this.price}`);
};

const mouse = new Item("mouse", "600");
const keyboard = new Item("keyboard", "1000");

mouse.dencrementPrice();
keyboard.dencrementPrice();

mouse.printItem();
keyboard.printItem();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
