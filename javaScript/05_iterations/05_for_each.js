// for each

const myHeros = ["superman", "batman", "flash"];

myHeros.forEach(function (name) {
  console.log(`Hero is ${name}`);
});

console.log("----------------------------------------------------------------");

myHeros.forEach((name, index) => {
  console.log(`Hero at index ${index} is ${name}`);
});

console.log("----------------------------------------------------------------");

const Heros = [
  {
    name: "Superman",
    power: "flight",
  },
  {
    name: "Batman",
    power: "super strength",
  },
  {
    name: "Flash",
    power: "speed",
  },
];

Heros.forEach((hero) => {
  console.log(`${hero.name} has the power of ${hero.power}`);
});

console.log("----------------------------------------------------------------");
