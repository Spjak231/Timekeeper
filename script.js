console.log("Running..");



// ================================= clockr functions ===========================================>

function showClock() {
    document.getElementsByClassName("noneShow")[0].style.display = "flex";
    const result = document.querySelectorAll(".btn")
    // console.log(result, typeof result)
    Object.entries(result).map(ele => {
        // console.log(ele)
        ele[1].style.display = "none"
    })

}

setInterval(() => {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDeg = seconds * 6;
    const minuteDeg = minutes * 6;
    const hourDeg = (hours % 12) * 30;

    document.getElementById("sec").style.transform = `translate(-50%, -50%) rotate(${secondDeg}deg)`;
    document.getElementById("min").style.transform = `translate(-50%, -50%) rotate(${minuteDeg}deg)`;
    document.getElementById("hour").style.transform = `translate(-50%, -50%) rotate(${hourDeg}deg)`;
}, 1000);


// ================================= Stopwatch functions ===========================================>

function showStopwatch() {
document.getElementsByTagName("h1")[1].style.fontSize = '2.5rem';

    const result = document.querySelectorAll(".btn")
    Object.entries(result).map(ele => {
        ele[1].style.display = "none"
    })

    const stopWatchElement = document.getElementsByClassName("stopwatchContainer")[0];
    stopWatchElement.style.display = "flex";

    var timeSs = 0;
    const function1 = setInterval(function () {
        // console.log(x);
        if (timeSs < 59) {
            let hours = 0;
            let mins = 0;
            let seconds = timeSs;
            document.getElementsByTagName("h1")[1].innerHTML = `${String(hours).padStart(2, '0')} : ${String(mins).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
        }
        else if (timeSs < 3600) {
            let hours = 0;
            let mins = timeSs/60;
            let seconds = timeSs%60;
            document.getElementsByTagName("h1")[1].innerHTML = `${String(hours).padStart(2, '0')} : ${String(mins).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
        }
        else {
            let hours = 0;
            let mins = 0;
            let seconds = timeSs;
            document.getElementsByTagName("h1")[1].innerHTML = `${String(hours).padStart(2, '0')} : ${String(mins).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
        }
        timeSs++;

    }, 1000);

    // setTimeout(() => {
    //     clearInterval(function1);
    //     console.log("Interval stopped");
    // }, 5000);
}


// ================================= timer functions ===========================================>

function showtimer() {
    const result = document.querySelectorAll(".btn")
    // console.log(result, typeof result)
    Object.entries(result).map(ele => {
        // console.log(ele)
        ele[1].style.display = "none"
    })

    const timerElement = document.getElementsByClassName("timer")[0];
    timerElement.style.display = "flex";
    timerElement.style.alignItems = "center";
    timerElement.style.justifyContent = "center";
    timerElement.style.flexDirection = "column";
}

let hhtimerTime = 0;
let mmtimerTime = 0;
let sstimerTime = 0;

let totalTimeInSec = 0;
let time = 0;
let intervalId = null;
let timerStarted = false;

function startTimer() {
    console.log("Start the timer...");

    if (intervalId !== null) {
        console.log("Timer already running.");
        return;
    }


    if (!timerStarted) {
        hhtimerTime = parseInt(document.getElementById("hh").value) || 0;
        mmtimerTime = parseInt(document.getElementById("mm").value) || 0;
        sstimerTime = parseInt(document.getElementById("ss").value) || 0;

        totalTimeInSec = (hhtimerTime * 3600) + (mmtimerTime * 60) + sstimerTime;
        time = totalTimeInSec;

        timerStarted = true;
    }

    document.querySelector('.outer').style.display = "flex";
    document.querySelector('.inputTime').style.display = "none";
    document.querySelector('.start').style.display = "none";
    document.querySelector('.stop').style.display = "flex";
    document.querySelector('.reset').style.display = "flex";

    intervalId = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        document.getElementsByTagName("h1")[0].innerHTML =
            `${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;

        time--;

        if (time < 0) {
            clearInterval(intervalId);
            intervalId = null;
            document.getElementsByTagName("h1")[0].innerHTML = "Time Out";
            console.log("Timer ended.");
        }
    }, 1000);
}

function pauseTimer() {
    console.log("Pause the timer...");
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
        console.log("Timer paused.");
    }
    document.querySelector('#pauseing').style = "box-shadow: rgb(255, 47, 0) 0px 0px 12px 2px; display: flex";
    // document.querySelector('#resumeing').style = "display: flex";
}

function resumeTimer() {
    console.log("Resume the timer...");
    document.querySelector('#pauseing').style = "display: flex";
    // document.querySelector('#resumeing').style = "box-shadow: rgb(255, 47, 0) 0px 0px 12px 2px; display: flex";
    startTimer();
}
