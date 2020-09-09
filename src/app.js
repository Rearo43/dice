'use strict';

const dotenv = require('dotenv');
dotenv.config();

// test

const CoinFlipper = require('./modules/coinFlip.js');

const upTimer = require('./modules/timer.js');

const setCountdown = require('./modules/countdown.js');

const { dieRoll } = require('./modules/dieRoll.js');


const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.BOT_USER_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});



// Listens to incoming messages that contain "hello"
app.message('Hello', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  console.log(message);
  await say(`Hey there <@${message.user}>!`);
});

app.command('/settimer', async ({  command, ack, say}) => {
  await ack();
  upTimer.setTimer(command,say);
});

app.command('/stoptimer', async({command, ack, say}) => {
  await ack();
  upTimer.stopTimer(command, say);
});

app.command('/gettimer', async({command, ack, say}) => {
  await ack();
  upTimer.getTimer(command, say);
});

app.command('/countdown', async ({ command, ack, say }) => {
  await ack();
  await setCountdown.setCountdown(command, say);
});

app.command('/coinflip', async ({ command, ack, say }) => {
  await ack();
  await say(CoinFlipper.flip(command));
});

app.command('/dieroll', async ({ command, ack, say }) => {
  await ack();
  await say(dieRoll(command));
});


(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
