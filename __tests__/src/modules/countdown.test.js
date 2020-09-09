'use strict';

const countdown = require('../../../src/modules/countdown.js').setCountdown;
const convertHMS = require('../../../src/modules/countdown.js').convertHMS;

const say = jest.fn();
const command = {
  token: '6HgxYuogiesOuCBvHeloQnbE',
  team_id: 'T019XV9QLS2',
  team_domain: 'ibroshza',
  channel_id: 'D01AA85456W',
  channel_name: 'directmessage',
  user_id: 'U01A4MCEZ8A',
  user_name: 'qasiraibrahim',
  command: '/countdown',
  text: '00:00:05',
  api_app_id: 'A01B039T508',
  response_url: 'https://hooks.slack.com/commands/T019XV9QLS2/1356845262084/YNzts9VxVwkMSjsPuvYufNqj',
  trigger_id: '1350658434514.1337995836886.3aa2e639c3cfd4201be36ff28924a8e7',
};

const failcommand = {
  token: '6HgxYuogiesOuCBvHeloQnbE',
  team_id: 'T019XV9QLS2',
  team_domain: 'ibroshza',
  channel_id: 'D01AA85456W',
  channel_name: 'directmessage',
  user_id: 'U01A4MCEZ8A',
  user_name: 'qasiraibrahim',
  command: '/countdown',
  text: '00:00:60',
  api_app_id: 'A01B039T508',
  response_url: 'https://hooks.slack.com/commands/T019XV9QLS2/1356845262084/YNzts9VxVwkMSjsPuvYufNqj',
  trigger_id: '1350658434514.1337995836886.3aa2e639c3cfd4201be36ff28924a8e7',
};

jest.useFakeTimers();

describe('Regex', () => {

  it('should allow up to 99 hours, 59 minutes, 59 seconds', () => {
    let regx = /^[0-9]{2}[:]{1}[0-5]{1}[0-9]{1}[:]{1}[0-5]{1}[0-9]{1}$/;

    let time1 = regx.test('00:00:05');
    expect(time1).toBe(true);

    let time2 = regx.test('00:30:00');
    expect(time2).toBe(true);

    let time3 = regx.test('01:44:59');
    expect(time3).toBe(true);
  });

  it('should not allow user to pass in 60 minutes or 60 seconds', () => {
    let regx = /^[0-9]{2}[:]{1}[0-5]{1}[0-9]{1}[:]{1}[0-5]{1}[0-9]{1}$/;

    let fail1 = regx.test('00:60:00');
    expect(fail1).toBe(false);

    let fail2 = regx.test('00:30:60');
    expect(fail2).toBe(false);
  });


  it('should not allow for improper formatting or missing HH||MM||SS', () => {
    let regx = /^[0-9]{2}[:]{1}[0-5]{1}[0-9]{1}[:]{1}[0-5]{1}[0-9]{1}$/;

    let fail3 = regx.test('50:00');
    expect(fail3).toBe(false);
    let fail4 = regx.test('0:0:30');
    expect(fail4).toBe(false);
  });

});

describe('setCountdown Function Timers', () => {

  it('should notify user a timer is being set if input is valid', () => {
    countdown(command, say);
    expect(say).toHaveBeenLastCalledWith(`Setting countdown for ${command.text} for <@${command.user_id}>.`);
  });

  it('should prompt the user to try again if their input was invalid', () => {
    countdown(failcommand, say);
    expect(say).toHaveBeenLastCalledWith('Oops! Try again, and please use HH:MM:SS format. For example: 00:30:00 will set a countdown for 30 minutes.');
  });

  it('should notify a user their time is up after the appropriate time has passed', () => {
    countdown(command, say);

    jest.advanceTimersByTime(5000);

    expect(say).toHaveBeenLastCalledWith(`<@${command.user_id}>, your ${command.text} is up!`);
  });

  it('should not notify the user their time is up if the countdown has not finished', () => {
    countdown(command, say);

    jest.advanceTimersByTime(4000);

    expect(say).toHaveBeenLastCalledWith(`Setting countdown for ${command.text} for <@${command.user_id}>.`);
  });

});

describe('convertHMS Function', () => {

  it('should convert HMS to milliseconds', () => {
    let result1 = convertHMS('00:00:05');
    let result2 = convertHMS('00:03:30');
    let result3 = convertHMS('01:45:00');
    expect(result1).toEqual(5000);
    expect(result2).toEqual(210000);
    expect(result3).toEqual(6300000);
  });

});