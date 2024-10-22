let startTime;
let updatedTime;
let savedTime = 0;
let difference;
let timeInterval;
let paused = false;

const timerDisplay = document.getElementById("timer");
const start = document.getElementById("startButton");
const pause = document.getElementById("pauseButton");
const resume = document.getElementById("resumeButton");
const reset = document.getElementById("resetButton");

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
resume.addEventListener("click", resumeTimer);
reset.addEventListener("click", resetTimer);

function startTimer() {
  startTime = new Date().getTime();
  timeInterval = setInterval(updateTimer, 1000);

  start.style.display = "none";
  pause.style.display = "inline";
}
function updateTimer() {
  updatedTime = new Date().getTime();
  console.log("upadtedTime--->", updatedTime);
  console.log("startTime--->", startTime);
 console.log("savedTime--->", savedTime);

  difference = updatedTime - startTime + savedTime;
  console.log("difference",difference);

  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);
console.log(hours);
console.log(minutes);
console.log(seconds);
  timerDisplay.textContent =
    formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

function pauseTimer() {
  clearInterval(timeInterval);
  savedTime = difference;
  console.log(savedTime);
  paused = true;
  pause.style.display = "none";
  resume.style.display = "inline";
}


function resumeTimer() {
  if (paused) {
    startTime = new Date().getTime();
    timeInterval = setInterval(updateTimer, 1000);
    resume.style.display = "none";
    pause.style.display = "inline";
  }
}


function resetTimer() {
    clearInterval(timeInterval);
    start.style.display="inline";
    pause.style.display="none";
    resume.style.display="none";
    timerDisplay.textContent="00:00:00";
    savedTime=0;
    paused=false;
}
