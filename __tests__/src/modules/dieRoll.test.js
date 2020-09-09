'use strict';

const _ = require('lodash');
jest.mock('lodash');

const { dieRoll, eachRoll } = require('../../../src/modules//dieRoll.js');

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

  let userInput = '5 4';
  
  expect(dieRoll(userInput)).toMatch('The average sum of your die rolls is 3.');
});
