import { event30Min, startEvent, startTime } from "./globals";

export function startEventTimer(){
    const msHours = 1000 * 60 * 60; // 3,600,000
    const eventWaitingTime = 1000 * 60 * 60 * 6; // 21,600,000

    var now = new Date;
    var utc = Date.UTC(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate() , 
          now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());

    console.log(utc);
    // new Date(Date.parse("Jun 13, 2018 10:50:39 GMT+1"));
    console.log('startEvent: ' + startEvent.name);
    console.log('startTime: ' + startTime);

    const timeDifference = startTime.getTime() - now;
    if(timeDifference >= 0){
        var timeDisplay = displayTimeLeft(timeDifference);
        console.log(getEvent(0).name + " in " + timeDisplay);
    }
    else{
        const timeLeft = Math.abs(timeDifference);
        console.log(timeLeft); // -2944990 (2,944,990) === 18,655,010 (5.1819472222hours)
        var cycles = Math.ceil(timeLeft / eventWaitingTime); // How many events have passed
        console.log(cycles);

        var time = (cycles * eventWaitingTime) - timeLeft;
        console.log(time);

        console.log(getEvent(cycles).name + " in " + displayTimeLeft(time));
    }
}

function getEvent(cycles){
    var event = startEvent.value + cycles;
    event = event % 3;
    console.log(event);
    if(event === 0){
        return event30Min.CRAFTING;

    }else if(event === 1){
        return event30Min.DELIVERY;
    }
    else{
        return event30Min.STORE;
    }
}

function displayTimeLeft(duration){
    var seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
}