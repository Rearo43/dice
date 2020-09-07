'use strict';

// TO GO ON INDEX.JS

// user should type /countdown 00:00:10
// to start a 10 second countdown
app.command('/countdown', async ({ command, ack, say }) => {

  await ack();
  console.log(command);
  let output = setCountdown(command);

  await say (output);

});

// PLAIN 
const setCountdown = async ({ message, say }) => {

  // validate input pattern using regex
  let regx = /^[0-9]{2}[:]{1}[0-5]{1}[0-9]{1}[:]{1}[0-5]{1}[1-9]{1}$/;

  let time = message.text;

  if (time.match(regx)) {
    let millis = convertHMS(time);
  
    setTimeout( async () => 
      await say(`<@${message.user}>, your ${time} is up!`), millis);

  } else {
    // bot prompts user to try again
    await say('Oops! Try again, and please use HH:MM:SS format. For example: 00:30:00 will set a countdown for 30 minutes.');
  }
};


// helper function to convert HH:MM:SS time format to milliseconds
const convertHMS = (time) => {
  console.log(time);

  // split HH:MM:SS input into array indeces
  let timesplit = time.split(':');

  // run conversion and return time in milliseconds
  return( (+timesplit[0] * (60000 * 60)) + (+timesplit[1] * 60000) + (+timesplit[2] * 1000));
};


module.exports = setCountdown;