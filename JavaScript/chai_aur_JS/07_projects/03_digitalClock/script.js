// // given solution
// const clock = document.getElementById("clock");

// setInterval(function () {
//   let date = new Date();
//   clock.innerHTML = date.toLocaleTimeString();
// }, 1000);

//new
// Function to update the clock display
function updateClock() {
  const clock = document.getElementById("clock");
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";
  const twelveHourFormat = hours % 12 || 12; // Convert hours to 12-hour format

  const timeString = `${twelveHourFormat}:${minutes}:${seconds} ${period}`;
  clock.textContent = timeString;

  const dateString = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  document.getElementById("date").textContent = dateString;
}

// Function to initialize the clock and update it every second
function initClock() {
  updateClock(); // Update immediately when the page loads
  setInterval(updateClock, 1000); // Update every second
}

// Initialize the clock when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  initClock();
});
