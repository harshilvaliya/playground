const inputBox = document.querySelector("#inputBox");
const toFahrenheit = document.querySelector("#toFahrenheit");
const toCelsius = document.querySelector("#toCelsius");
const convertBtn = document.querySelector("#convertBtn");
const result = document.querySelector("#result");
let temp;

function convertTemp() {
  if (toFahrenheit.checked) {
    temp = Number(inputBox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = `The temperature is ${temp}°F`;
  } else if (toCelsius.checked) {
    temp = Number(inputBox.value);
    temp = ((temp - 32) * 5) / 9;
    result.textContent = `The temperature is ${temp}°C`;
  } else {
    result.textContent = "Please select a unit";
  }
}
