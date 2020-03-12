import { event30Min, startEvent, startTime, eventTimes } from "./globals";

var countdown = 0;
var nextEvent = null;
const eventCountdownElement = document.getElementById("eventCountdown");
var intervalTimer = null;

export function startEventTimer(){
    eventCountdownElement.classList.remove("event-running");

    const eventWaitingTime = 1000 * 60 * 60 * 6; // 21,600,000ms | time between each event (6 hours)
    const eventDuration = 1000 * 60 * 30; // 1,800,000ms | time event lasts (30 minutes)

    // Check if event is ongoing
    if(!isEventOngoing()){
        // Event is not ongoing
        var timeToStart = getClosestStart();
        // No events planned to come
        if(timeToStart === null){
            return;
        }
        else{
            countdown = Math.abs(timeToStart.getTime() - new Date().getTime());
            const eventCycles = Math.ceil(countdown / eventWaitingTime); // How many events have passed
            
            nextEvent = getEvent(eventCycles);
            intervalTimer = setInterval(displayTimeLeft, 1000);
        }
        return;
    }

    const timeDifference = Math.abs(startTime.getTime() - new Date());
    const cycles = Math.ceil(timeDifference / eventWaitingTime); // How many events have passed
    const timeLeft = (cycles * eventWaitingTime) - timeDifference; // Time till next event
    
    // Event is running
    if(timeLeft > eventWaitingTime - eventDuration){
        eventCountdownElement.classList.add("event-running");
        countdown = eventDuration - (eventWaitingTime - timeLeft);
        nextEvent = getEvent(cycles - 1);
        intervalTimer = setInterval(function(){ displayTimeLeft(true); }, 1000);
    }
    // Event is not running
    else{
        countdown = timeLeft;
        nextEvent = getEvent(cycles);
        intervalTimer = setInterval(displayTimeLeft, 1000);
    }
}

/**
 * Gets the closest startTime of all the events
 */
function getClosestStart(){
    var startTime = null;
    
    const currentTime = new Date().getTime();
    eventTimes.forEach(eventTime => {
        if(startTime === null){
            if(eventTime.startTime >= currentTime){
                startTime = eventTime.startTime;
            }
        }
        else{
            if(eventTime.startTime >= currentTime && eventTime.startTime < startTime){
                startTime = eventTime.startTime;
            }
        }
    });
    return startTime;
}

/**
 * Checks if event is currently ongoing
 */
function isEventOngoing(){
    const currentTime = new Date().getTime();
    for(var i = 0; i < eventTimes.length; i++){
        if(eventTimes[i].startTime.getTime() < currentTime && currentTime < eventTimes[i].endTime.getTime()){
            return true;
        }
    }
    return false;
}

/**
 * Gets the next event, based on startEvent and the cycles (time since startTime)
 */
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

/**
 * duration is time in ms
 * returns hours, minutes and seconds left, nicely formatted as a string
 */
function getTimeLeft(duration){
    var seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
    days = Math.floor((duration / (1000 * 60 * 60 * 24)));

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    return days + "d:" + hours + "h:" + minutes + "m:" + seconds + "s";
}

/**
 * Writes to a p tag, the time left for event
 */
function displayTimeLeft(eventRunning = false){
    countdown -= 1000;
    if(countdown < 0){
        clearInterval(intervalTimer);
        startEventTimer();
    }
    if(eventRunning){
        eventCountdownElement.innerText = nextEvent.name + " ongoing. Time left: " + getTimeLeft(countdown);
    }
    else{
        eventCountdownElement.innerText = "*** " + nextEvent.name + " in " + getTimeLeft(countdown) + " ***";
    }
}