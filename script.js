let display = document.querySelector(".display");
let startBtn = document.querySelector(".startbtn");
let pauseBtn = document.querySelector(".pausebtn");
let restartBtn = document.querySelector(".restartbtn");

let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;
let isRunning = false;

function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    display.innerText = `${h}:${m}:${s}`;
}

function startTimer() {
    if (!isRunning) {
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
        }, 1000);
        isRunning = true;
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0];
    updateDisplay();
    isRunning = false;
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
restartBtn.addEventListener("click", resetTimer);

// Initialize display
updateDisplay();
