'use strict';
const moment = require('moment'); // require

let timeMap= {};

function setTimer(user, forUser=null){
    let currentTime = moment();
    timeMap[user] = {time: currentTime, users:[user, forUser]};


}

function stopTimer(user){
    if(!timeMap[user]){
       return false;
    }
let timeSpent = getTimer(user);
    delete timeMap[user];
    return timeSpent;
}

function getTimer(user){
    if(!timeMap[user]){
        return false;
     }
    let endTime = moment();
    let startTime = timeMap[user].time;
    let totalTime = moment.utc(endTime.diff(startTime)).format("HH:mm:ss").split(':');
    let hours = parseInt(totalTime[0]) > 0 ? parseInt(totalTime[0]) : null;
    let minutes = parseInt(totalTime[1]) > 0 ? parseInt(totalTime[1]) : null;
    let seconds =  parseInt(totalTime[2]) > 0 ? parseInt(totalTime[2]) : null;

    let timeSpent = '';
    if(hours){
        timeSpent += `${housr} hour `
    }
    if(minutes){
        timeSpent += `${minutes} min `
    }
    if(seconds){
        timeSpent += `${seconds} sec `
    }
    return timeSpent;
}



module.exports = {
    setTimer: setTimer,
    stopTimer: stopTimer,
    getTimer:getTimer
}