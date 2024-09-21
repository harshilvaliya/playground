// object literal
const user = {
  username: "Thalapathy Vijay",
  movies: 68,
  isActing: true,
  getDetails: function () {
    console.log(this.username, this.movies, this.isActing);
  },
};

user.getDetails();

console.log("----------------------------------------------------------------");

// constructor function
const date = new Date(); // here new is a constructor function

function Actor(name, movies, isActing) {
  this.name = name;
  this.movies = movies;
  this.isActing = isActing;
  return this;
}

const actor1 = new Actor("Suriya", 43, true);
const actor2 = new Actor("Dhanush", 50, true);
const actor3 = new Actor("Rajanikanth", 170, true);

console.log(actor1);
console.log(actor2);
console.log(actor3);
