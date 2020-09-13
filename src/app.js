'use strict';

const { App } = require('@slack/bolt');
const dotenv = require('dotenv');
dotenv.config();

const { dieRoll } = require('./modules/dieRoll.js');

const app = new App({
  token: process.env.BOT_USER_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});


app.command('/sayhello', async ({ command, ack, say }) => {
  await ack();
  await say(`Hey there <@${command.user_id}>!`);
});

app.command('/dieroll', async ({ command, ack, say }) => {
  await ack();
  await say(dieRoll(command));
});


(async () => {
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
