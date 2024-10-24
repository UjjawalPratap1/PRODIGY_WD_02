let display = document.getElementById('display');
let startStopBtn = document.getElementById('startStopBtn');
let resetBtn = document.getElementById('resetBtn');

let hours = 0;
let minutes = 0;
let seconds = 0;
let timerInterval;
let isRunning = false;

function updateDisplay() {
    let hrs = hours < 10 ? '0' + hours : hours;
    let mins = minutes < 10 ? '0' + minutes : minutes;
    let secs = seconds < 10 ? '0' + seconds : seconds;
    display.textContent = `${hrs}:${mins}:${secs}`;
}

function startStopwatch() {
    timerInterval = setInterval(() => {
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
}

function stopStopwatch() {
    clearInterval(timerInterval);
}

startStopBtn.addEventListener('click', () => {
    if (isRunning) {
        stopStopwatch();
        startStopBtn.textContent = 'Start';
    } else {
        startStopwatch();
        startStopBtn.textContent = 'Stop';
    }
    isRunning = !isRunning;
});

resetBtn.addEventListener('click', () => {
    stopStopwatch();
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
    startStopBtn.textContent = 'Start';
    isRunning = false;
});
