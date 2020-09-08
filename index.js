'use strict';

const dotenv = require('dotenv');
const CoinFlipper = require('./src/modules/coinFlip.js');

dotenv.config()

const { App } = require("@slack/bolt");

const app = new App({
    token: process.env.BOT_USER_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
});


// Listens to incoming messages that contain "hello"
app.message('Hello', async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    console.log(message);
    await say(`Hey there <@${message.user}>!`);
});

// Listens to incoming messages that contain "hello"
app.message('set timer', async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    await say(`Timer set`);

    setTimeout(async () => await say(`You time is over`), 5000)
});

// All the room in the world for your code
app.command('/coinflip', async ({ command, ack, say }) => {
    await ack();
    await say(CoinFlipper.flip(command));
});


(async () => {
    // Start your app
    await app.start(process.env.PORT || 3000);

    console.log('⚡️ Bolt app is running!');

})();
