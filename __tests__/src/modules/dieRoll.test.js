'use strict';

const _ = require('lodash');
jest.mock('lodash');

const { dieRoll, eachRoll } = require('../../../src/modules//dieRoll.js');

const slackObjEmpty = {text: ''};
const slackObjInput = {text: '5 4'};

it('Should run helper function with default values', () => {
  _.random.mockImplementation(() => 3);

  expect(eachRoll()).toBeGreaterThanOrEqual(1);
  expect(eachRoll()).toBeLessThan(7);
});

it('Should run with user input', () => {
  _.random.mockImplementation(() => 2);

  expect(dieRoll('')).toEqual('The number 2 was rolled.');
});

it('Should run with user input', () => {
  _.random.mockImplementation(() => 3);
  
  expect(dieRoll(slackObjEmpty)).toMatch('The average sum of your die rolls is 3.');
});

it('Should run with user input', () => {
  _.random.mockImplementation(() => 3);

  expect(dieRoll(slackObjInput)).toMatch('The average sum of your die rolls is 3.');
});
