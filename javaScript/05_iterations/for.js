// for loops

for (let index = 0; index <= 10; index++) {
  const element = index;
  console.log(element);
}

console.log("----------------------------------------------------------------");

for (let i = 1; i <= 5; i++) {
  console.log("--------------------");
  console.log(`outer: ${i}`);

  for (let j = 1; j <= 3; j++) {
    console.log(`inner: ${j} & outer: ${i}`);
  }
}

console.log("----------------------------------------------------------------");

myHeros = ["superman", "batman", "flash"];

for (let index = 0; index < myHeros.length; index++) {
  const element = myHeros[index];
  console.log(element);
}

console.log("----------------------------------------------------------------");

for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    console.log(`${i} : Thala for a reason!`);
    break;
  }
  console.log(`value: ${i}`);
}

console.log("----------------------------------------------------------------");

for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    console.log("Thala for a reason!");
    continue;
  }
  console.log(`value: ${i}`);
}
