import { event30Min, startEvent, startTime } from "./globals";

var timeToNextEvent = 0;
var nextEvent = null;

export function startEventTimer(){
    const eventWaitingTime = 1000 * 60 * 60 * 6; // 21,600,000ms

    const timeDifference = startTime.getTime() - new Date();
    if(timeDifference >= 0){
        timeToNextEvent = timeDifference;
        nextEvent = getEvent(0);
    }
    else{
        const timeLeft = Math.abs(timeDifference);
        var cycles = Math.ceil(timeLeft / eventWaitingTime); // How many events have passed

        var time = (cycles * eventWaitingTime) - timeLeft;
        timeToNextEvent = time;
        nextEvent = getEvent(cycles);
    }

    setInterval(displayTimeLeft, 1000);
}

function getEvent(cycles){
    var event = startEvent.value + cycles;
    event = event % 3;
    if(event === 0){
        return event30Min.CRAFTING;

    }else if(event === 1){
        return event30Min.DELIVERY;
    }
    else{
        return event30Min.STORE;
    }
}

function getTimeLeft(duration){
    var seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
}

function displayTimeLeft(){
    timeToNextEvent -= 1000;
    var eventCountdown = document.getElementById("eventCountdown");
    eventCountdown.innerText = nextEvent.name + " in " + getTimeLeft(timeToNextEvent);
}