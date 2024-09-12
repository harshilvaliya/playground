// filter

const numbers = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10];

// array.filter ( (value) => (condition) )
const filteredNumbers = numbers.filter((num) => num % 2 === 0);

console.log(filteredNumbers);

console.log("---------------------------------------------------------------");

// using for each

const filteredNumbers2 = [];

numbers.forEach((num) => {
  if (num % 2 === 0) {
    filteredNumbers2.push(num);
  }
});

console.log(filteredNumbers2);

console.log("---------------------------------------------------------------");

const books = [
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    year: "2015",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    year: "1960",
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian Fiction",
    year: "1949",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    year: "1925",
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    genre: "Fiction",
    year: "1851",
  },
];

let filteredBooks = books.filter((bk) => bk.genre === "Dystopian Fiction");
console.log(filteredBooks);

console.log("---------------------------------------------------------------");

filteredBooks = books.filter((bk) => bk.genre === "Fiction" && bk.year >= 1950);
console.log(filteredBooks);
