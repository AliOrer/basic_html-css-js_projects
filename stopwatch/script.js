const timerEl = document.getElementById("timer");
const startButtonEl = document.getElementById("start");
const stopButtonEl = document.getElementById("stop");
const resetButtonEl = document.getElementById("reset");


let startTim = 0;
let elapsedTime = 0;
let timerInterval ;

function startTimer() {
    startTime = Date.now() - elapsedTime;
}