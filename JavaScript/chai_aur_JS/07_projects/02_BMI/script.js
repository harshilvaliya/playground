// optimized solution,
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  let message = "";

  if (isNaN(height) || height <= 0) {
    message = "Please give a valid height.";
  } else if (isNaN(weight) || weight <= 0) {
    message = "Please give a valid weight.";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    message = `<span>${bmi}</span>`;
  }

  results.innerHTML = message;
});

/*
// given solution
const form = document.querySelector("form");
// this use case will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
*/
