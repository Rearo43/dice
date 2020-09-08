'use strict';

/**
 * @function setCountdown responds to Slash Command '/countdown' when a valid time input in HH:MM:SS format follows the command
 * @param {object} command returns information related to user input object, including these properties:
 * user_id,
 * command,
 * text
 * @param {function} say prompts app to output the response passed into it as a parameter
 */
const setCountdown = async (command, say) => {

  /**
   * @var regx - a regular expression that checks the user input (command.text) matches the pattern. It must be [[0-9][0-9]]:[[0-5][0-9]]:[[0-5][0-9]].
   * The first digit in the minutes and seconds column must not be 6 or higher, indicating that the user can not pass in 60 minutes or 60 seconds, and must instead format them as 01 hours or 01 minutes, respectively.
   */
  let regx = /^[0-9]{2}[:]{1}[0-5]{1}[0-9]{1}[:]{1}[0-5]{1}[0-9]{1}$/;

  /**
   * @var time - a string representing the time the user wants to set a countdown for, in HH:MM:SS format, passed by the user in command.text
   */
  let time = command.text;
  let valid = regx.test(time);

  if (valid) {
    await say(`Setting timer for ${time} for <@${command.user_id}>.`);

    /**
     * @var millis - represents milliseconds, which are returned by the conversion helper function convertHMS
     */
    let millis = convertHMS(time);

    setTimeout(async () => {
      await say(`<@${command.user_id}>, your ${time} is up!`);
    }, millis);

  } else {
    /* bot prompts user to try again */
    say('Oops! Try again, and please use HH:MM:SS format. For example: 00:30:00 will set a countdown for 30 minutes.');
  }
};


/**
 * @function convertHMS acts as a helper function to convert HH:MM:SS time format to milliseconds so that it works with setTimeout in setCountdown
 * @param {string} time a string representing the time the user wants to set a countdown for, in HH:MM:SS format, passed by the user in command.text
 */
const convertHMS = (time) => {
  let timesplit = time.split(':');
  /* run conversion and return time in milliseconds */
  return( (+timesplit[0] * (60000 * 60)) + (+timesplit[1] * 60000) + (+timesplit[2] * 1000) );
};


module.exports = {
  setCountdown: setCountdown, 
  convertHMS: convertHMS,
};
