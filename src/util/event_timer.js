import { event30Min, startEvent, startTime } from "./globals";

export function startEventTimer(){
    console.log(new Date().getTime());
    // new Date(Date.parse("Jun 13, 2018 10:50:39 GMT+1"));
    console.log('startEvent: ' + startEvent);
    console.log('startTime: ' + startTime);
}