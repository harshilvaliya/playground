const body = document.body;
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

let colorIntervalId;

const randomColor = () => {
  const color = Math.floor(Math.random() * 16777215).toString(16);
  body.style.backgroundColor = "#" + color.padStart(6, "0");
};

const startColorChange = () => {
  if (!colorIntervalId) {
    colorIntervalId = setInterval(randomColor, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
  }
};

const stopColorChange = () => {
  clearInterval(colorIntervalId);
  colorIntervalId = null;
  startBtn.disabled = false;
  stopBtn.disabled = true;
};

startBtn.addEventListener("click", startColorChange);
stopBtn.addEventListener("click", stopColorChange);

// Initialize button states
stopBtn.disabled = true;
