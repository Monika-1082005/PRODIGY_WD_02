let displayTime = document.getElementById('displayTime');
let lap_time = document.getElementById('lap-time');
let [second, minutes, hours] = [0, 0, 0];
let timer = null;
let lapTimes = [];

function updateStopWatch() {
    second++;
    if (second == 60) {
        second = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = (hours < 10) ? "0" + hours : hours;
    let m = (minutes < 10) ? "0" + minutes : minutes;
    let s = (second < 10) ? "0" + second : second;

    displayTime.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {
    if (timer != null) {
        clearInterval(timer);
    }
    timer = setInterval(updateStopWatch, 1000);
}

function watchStop() {
    clearInterval(timer);
    lapTimes.push(displayTime.innerHTML);
    lap_time.innerHTML = lapTimes.join('<br>');
}

function watchReset() {
    clearInterval(timer);
    [second, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
    lapTimes = []; 
    lap_time.innerHTML = "";
}
