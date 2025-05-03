// script.js
let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

function updateDisplay() {
  const time = new Date(elapsedTime);
  const minutes = time.getUTCMinutes().toString().padStart(2, '0');
  const seconds = time.getUTCSeconds().toString().padStart(2, '0');
  const milliseconds = Math.floor(time.getUTCMilliseconds() / 10).toString().padStart(2, '0');
  document.getElementById('display').textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function startStop() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10);
    isRunning = true;
  }
}

function pause() {
  clearInterval(timerInterval);
  isRunning = false;
}

function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay();
  document.getElementById('laps').innerHTML = '';
  isRunning = false;
}

function lap() {
  if (!isRunning) return;
  const lapTime = document.getElementById('display').textContent;
  const li = document.createElement('li');
  li.textContent = `Lap: ${lapTime}`;
  document.getElementById('laps').appendChild(li);
}
