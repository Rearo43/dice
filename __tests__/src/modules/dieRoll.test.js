'use strict';

const _ = require('lodash');
jest.mock('lodash');

const { dieRoll, eachRoll } = require('../../../src/modules//dieRoll.js');

const slackObjEmpty = {text: '', user_id: '@Reagan'};
const slackObjInput = {text: '5 4', user_id: '@Reagan'};

describe('Testing Die Roll Module: ', () => {

    it('Should run helper function with default values', () => {
      _.random.mockImplementation(() => 3);

      expect(eachRoll()).toBeGreaterThanOrEqual(1);
      expect(eachRoll()).toBeLessThan(7);
    });

    it('Should run with default values', () => {
      _.random.mockImplementation(() => 2);

      expect(dieRoll(slackObjEmpty)).toEqual('<@@Reagan> rolled :die-2:');
    });

    it('Should run with user input', () => {
      _.random.mockImplementation(() => 3);

      expect(dieRoll(slackObjInput)).toMatch('<@@Reagan> rolled a die and after 4 rolls, the average of the dice rolled was... :die-3:');
    });

});


