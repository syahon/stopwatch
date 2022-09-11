const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const textTime = document.getElementById("time");
let start;
let intervalId;
let stopTime = 0;

startButton.addEventListener("click", function() {
  start = Date.now();
  toggle();
  intervalId = setInterval(onTimer, 10);
})

stopButton.addEventListener("click", function() {
  stopTime += (Date.now() - start);
  toggle();
  clearInterval(intervalId);
})

resetButton.addEventListener("click", function() {
  resetButton.disabled = true;
  textTime.innerHTML = "00:00:00:00";
  stopTime = 0;
})

function addZero(value) {
  if (value < 10) {
  value = "0" + value;
  };

  return value;
}

function onTimer() {
  let now = Date.now();
  let countTime = now - start + stopTime;

  let milli = Math.floor(countTime / 10)
  let seconds = Math.floor(countTime / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes /60);

  milli -= seconds * 100;
  seconds -= minutes * 60;
  minutes -= hours * 60;

  milli = addZero(milli);
  seconds = addZero(seconds);
  minutes = addZero(minutes);
  hours= addZero(hours);

  textTime.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + milli;
}

function toggle() {
  if (startButton.disabled != true) {
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;
  }else{
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
  }
}