

let clockElmHours = document.getElementById('now_hours');
let clockElmMinutes = document.getElementById('now_minutes');
let clockElmSeconds = document.getElementById('now_seconds');


function countdown() {
    const now = new Date();

    const hours = now.getHours();;
    const minutes = now.getMinutes();;
    const seconds = now.getSeconds();

    clockElmHours.innerHTML = formatTime(hours);
    clockElmMinutes.innerHTML = formatTime(minutes);
    clockElmSeconds.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);


