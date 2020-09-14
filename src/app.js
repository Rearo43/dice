'use strict';

const { App } = require('@slack/bolt');
const dotenv = require('dotenv');
dotenv.config();

const { dieRoll } = require('./modules/dieRoll.js');
const randomLetters = require('./modules/wordGame.test.js');

const app = new App({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    token: process.env.BOT_USER_TOKEN,
});

// app.post('/'), function(req, res, next) {
//     let payload = req.body;
//     res.sendStatus(200);

//     if (payload.event.type === 'app_mention') {
//         if (payload.event.text.includes('tell me a joke')) {
//         // Make call to chat.postMessage using bot's token
//         }
//     }
// }

app.command('/sayhello', async ({ command, ack, say }) => {
    await ack();
    await say(`Hey there <@${command.user_id}>!`);
});

app.command('/dieroll', async ({ command, ack, say }) => {
    await ack();
    await say(dieRoll(command));
});

app.command('/wordgame', async ({ command, ack, say }) => {
    await ack();
    await say(randomLetters(command));
});

app.message('/game', async ({ command, ack, say }) => {
    await ack();
    await say('hey');
});


(async () => {
    await app.start(process.env.PORT || 3000);

    console.log('⚡️ Bolt app is running!');
})();
