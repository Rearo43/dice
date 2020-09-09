'use strict';

const randomSpy = jest.spyOn(Math, 'random');
const _ = require('lodash');
jest.mock('lodash');
const { dieRoll, eachRoll } = require('../../../src/modules//dieRoll.js');

afterEach(() => {
  randomSpy.mockRestore();
});

it.only('Should run helper function with default values', () => {
  _.random.mockImplementation(() => 3);
  expect(eachRoll()).toBeGreaterThanOrEqual(1);
  expect(eachRoll()).toBeLessThan(7);
});

it('Should roll a 3', () => {
  randomSpy.mockImplementation(() => 3);
//   randomSpy.mockRestore();
});

it('Should run with user input', () => {
//   randomSpy.mockImplementation(() => 2);
  _.random.mockImplementation(() => 2);
  let actual = dieRoll('');
  let expected = 'The number 2 was rolled.';
  expect(actual).toEqual(expected);
//   expect(dieRoll('')).toMatch('The number 4 was rolled.');
//   randomSpy.mockRestore();
});

it('Should run with user input', () => {
  let userInput = '5 4';
  _.random.mockImplementation(() => 3);
  expect(dieRoll(userInput)).toMatch('The average sum of your die rolls is 3.');
//   randomSpy.mockRestore();
});
