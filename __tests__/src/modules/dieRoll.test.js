'use strict';

const randomSpy = jest.spyOn(Math, 'random');
const { dieRoll } = require('../../../src/modules//dieRoll.js');
const { eachRoll } = require('../../../src/modules//dieRoll.js');

afterAll(() => {
  randomSpy.mockRestore();
});

it('Should run helper function with default values', () => {
  expect(eachRoll()).toBeGreaterThanOrEqual(1);
  expect(eachRoll()).toBeLessThan(7);
});

it('Should roll a 3', () => {
  randomSpy.mockImplementation(() => 3);

});

// it('Should run defaults', () => {
//   expect(dieRoll(3)).toBeGreaterThanOrEqual(1);
//   expect(dieRoll(3)).toBeLessThan(4);
// });
