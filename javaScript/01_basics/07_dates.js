const myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

console.log("----------------------------------------------------------------");

const myDate2 = new Date(2021, 2, 33);
console.log(myDate2);
console.log(myDate2.toDateString());

console.log("----------------------------------------------------------------");

const myDate3 = new Date(2021, 2, 15, 12, 34, 56);
console.log(myDate3);
console.log(myDate3.toLocaleString());

console.log("----------------------------------------------------------------");

const myDate4 = new Date("2022-01-13");
console.log(myDate4.toLocaleString());
console.log(myDate4.getTime());

console.log("----------------------------------------------------------------");

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Math.floor(myTimeStamp / 1000));

console.log("----------------------------------------------------------------");

let myDate5 = new Date();
console.log(myDate5.toDateString());
console.log(myDate5.getDate());
console.log(myDate5.getDay());
console.log(myDate5.getFullYear());
console.log(myDate5.getHours());
console.log(myDate5.getMinutes());
console.log(myDate5.getMonth() + 1);

console.log("----------------------------");

console.log(
  myDate5.toLocaleString("default", {
    hour: "2-digit",
    minute: "2-digit",
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour12: true,
    timeZoneName: "short",
  })
);
