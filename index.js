'use strict';

const dotenv = require('dotenv');
dotenv.config();

const upTimer = require('./timer/timer.js')

const { App } = require("@slack/bolt");


const app = new App({
  token: process.env.BOT_USER_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});


// Listens to incoming messages that contain "hello"
app.message('Hello', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Hey there <@${message.user}>!`);
});



//  Timer Up need to change to /commands

app.message('set timer', async ({ message, say }) => {
  if(message.text.includes('<@')){
    let user = message.text.split(' ').filter(word => word.includes('<@'));
    console.log(user)
    upTimer.setTimer(user[0]);
    await say(`${user[0]},  <@${message.user}> just started timer for you.`);
  }else{
    upTimer.setTimer(message.user);
    await say(`<@${message.user}> your timer is set.`);
  }
  
});

app.message('stop timer', async({message, say}) => {
  let time;
  let user;
  if(message.text.includes('<@')){
  user = message.text.split(' ').filter(word => word.includes('<@'))[0]; 
  time  = upTimer.stopTimer(user);
  }else{
    user = message.user;
    time = upTimer.stopTimer(message.user);
  }
  if(!time){
    await say(`You haven't set timer yet!`);
  }else {
    await say(`<@${user}> our spent ${time}`);
  }
});

app.message('show time', async({message, say}) => {
  let time  = upTimer.getTimer(message.user)
  if(!time){
    await say(`You haven't set timer yet!`);
  }else {
    await say(`Your current time is ${time}`);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////



(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log(`⚡️ Bolt app is running on port ${process.env.PORT || 3000}`);

})();
