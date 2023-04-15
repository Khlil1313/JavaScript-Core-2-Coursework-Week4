
function setAlarm() {
  let inputTime = document.querySelector("#alarmSet").value;
  let titleInput = document.querySelector("#timeRemaining");
  let titleTime = calMinutesAndSeconds (inputTime)
  titleInput.textContent = titleTime;
  
  let counter = inputTime
  let timeCountdown = setInterval(function () {
    counter--
    titleTime = calMinutesAndSeconds(counter);
    titleInput.textContent = titleTime;
 
    if (counter === 0) {
      playAlarm();
    }
  },1000)
  
}

function pauseAlarm() {
  clearInterval(timeCountdown);
}

function calMinutesAndSeconds (number) {
  let computeMinutes = Math.floor(number / 60);
  let seconds = number % 60;
  let titleTime = `Time Remaining: ${computeMinutes}:${seconds}`;
  return titleTime
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();``
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
