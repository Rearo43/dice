'use strict';
const moment = require('moment'); // require

let timeMap= {};

async function setTimer(command, say){
  let currentTime = moment();
  let user;
  if(command.text.includes('@')){
    user = command.text.split(' ').filter(word => word.includes('@'))[0];
    addTomap(currentTime, user, command.user_id);
    await say(`<${user}>,  <@${command.user_id}> just started timer for you.`);
  }else{
    user = command.user_id;
    addTomap( currentTime, user);
    await say(`<@${command.user_id}> your timer is set.`);
  }
}

async function stopTimer(command, say){
  let user;
  let userName;
  if(command.text.includes('@')){
    user = command.text.split(' ').filter(word => word.includes('@'))[0];
    userName = `<${user}>`;
  } else {
    user = command.user_id;
    userName =`<@${user}>`;
  }
  if(!timeMap[user]){
    await say(`Timer for ${userName} is not set yet.`);
  } else {
    let timeSpent = calculateTime(user);
    delete timeMap[user];
    await say(`${userName} spent ${timeSpent}`);
  }
}

async function getTimer(command, say){
  let user;
  let userName;
  if(command.text.includes('@')){
    user = command.text.split(' ').filter(word => word.includes('@'))[0];
    userName = `<${user}>`;
  } else {
    user = command.user_id;
    userName =`<@${user}>`;
  }
  if(!timeMap[user]){
    await say(`Timer for ${userName} is not set yet.`);
  }else{
    let timeSpent = calculateTime(user);
    await say(` ${userName}  your current time is ${timeSpent}`);
  }      
}

let addTomap = function(currentTime, user, forUser) {
  timeMap[user] = {time: currentTime, users:[user]};
  if( forUser){
    timeMap[user].users.push(forUser);
  }
};

function calculateTime(user) {
  let endTime = moment();
  let startTime = timeMap[user].time;
  let totalTime = moment.utc(endTime.diff(startTime)).format('HH:mm:ss').split(':');
  let hours = parseInt(totalTime[0]) > 0 ? parseInt(totalTime[0]) : null;
  let minutes = parseInt(totalTime[1]) > 0 ? parseInt(totalTime[1]) : null;
  let seconds =  parseInt(totalTime[2]) > 0 ? parseInt(totalTime[2]) : null;

  let timeSpent = '';
  if(hours){
    timeSpent += `${hours} hour `;
  }
  if(minutes){
    timeSpent += `${minutes} min `;
  }
  if(seconds){
    timeSpent += `${seconds} sec `;
  }
  return timeSpent;
}



module.exports = {
  setTimer: setTimer,
  stopTimer: stopTimer,
  getTimer: getTimer,
};
