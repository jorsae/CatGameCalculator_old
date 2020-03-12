import { event30Min, startEvent, startTime, endTime } from "./globals";

var countdown = 0;
var nextEvent = null;
const eventCountdownElement = document.getElementById("eventCountdown");
var intervalTimer = null;

export function startEventTimer(){
    eventCountdownElement.classList.remove("event-ongoing");

    const eventWaitingTime = 1000 * 60 * 60 * 6; // 21,600,000ms | time between each event (6 hours)
    const eventDuration = 1000 * 60 * 30; // 1,800,000ms | time event lasts (30 minutes)

    const timeDifference = Math.abs(startTime.getTime() - new Date());
    var cycles = Math.ceil(timeDifference / eventWaitingTime); // How many events have passed
    const timeLeft = (cycles * eventWaitingTime) - timeDifference; // Time till next event
    
    const nextEventTimestamp = new Date().getTime() + timeLeft;
    if(nextEventTimestamp >= endTime.getTime()){
        return;
    }
    
    // Event is ongoing
    if(timeLeft > eventWaitingTime - eventDuration){
        eventCountdownElement.classList.add("event-ongoing");
        countdown = eventDuration - (eventWaitingTime - timeLeft);
        nextEvent = getEvent(cycles - 1);
        intervalTimer = setInterval(function(){ displayTimeLeft(true); }, 1000);
    }
    // Event is not ongoing
    else{
        countdown = timeLeft;
        nextEvent = getEvent(cycles);
        intervalTimer = setInterval(displayTimeLeft, 1000);
    }
}

function getEvent(cycles){
    var event = startEvent.value + cycles;
    event = event % 3;
    if(event === 0){
        return event30Min.CRAFTING;

    }
    else if(event === 1){
        return event30Min.BASKET;
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

function displayTimeLeft(eventOngoing = false){
    countdown -= 1000;
    if(countdown < 0){
        clearInterval(intervalTimer);
        startEventTimer();
    }
    if(eventOngoing){
        eventCountdownElement.innerText = nextEvent.name + " ongoing. Time left: " + getTimeLeft(countdown);
    }
    else{
        eventCountdownElement.innerText = "*** " + nextEvent.name + " in " + getTimeLeft(countdown) + " ***";
    }
}