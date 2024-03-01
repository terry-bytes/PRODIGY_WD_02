let startTime;
let running = false;
let interval;
let lapCounter = 1;
let elapsedMilliseconds = 0;

function startStopwatch() {
    if (!running) {
        startTime = new Date().getTime() - elapsedMilliseconds;
        interval = setInterval(updateDisplay, 1000);
        document.getElementById("lapTimes").innerHTML = ""; 
        running = true;
        document.querySelector('button:nth-of-type(1)').innerText = "Pause";
    } else {
        clearInterval(interval);
        running = false;
        document.querySelector('button:nth-of-type(1)').innerText = "Resume";
    }
}

function pauseStopwatch() {
    if (running) {
        clearInterval(interval);
        running = false;
        document.querySelector('button:nth-of-type(1)').innerText = "Resume";
               elapsedMilliseconds = new Date().getTime() - startTime;
    }
}

function resetStopwatch() {
    clearInterval(interval);
    running = false;
    document.getElementById("display").innerText = "00:00:00";
    document.querySelector('button:nth-of-type(1)').innerText = "Start";
    lapCounter = 1;
    document.getElementById("lapTimes").innerHTML = "";
    elapsedMilliseconds = 0; 
}

function updateDisplay() {
    const currentTime = new Date().getTime();
    elapsedMilliseconds = currentTime - startTime;
    const elapsedTime = new Date(elapsedMilliseconds);
    const hours = elapsedTime.getUTCHours().toString().padStart(2, '0');
    const minutes = elapsedTime.getUTCMinutes().toString().padStart(2, '0');
    const seconds = elapsedTime.getUTCSeconds().toString().padStart(2, '0');

    document.getElementById("display").innerText = `${hours}:${minutes}:${seconds}`;
}

function lap() {
    if (running) {
        const lapTime = document.getElementById("display").innerText;
        const lapItem = document.createElement("li");
        lapItem.innerText = `Lap ${lapCounter}: ${lapTime}`;
        document.getElementById("lapTimes").appendChild(lapItem);
        lapCounter++;
    }
}
