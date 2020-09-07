'use strict';

/** will need to rework since coinflip logic has changed */

const coinFlip = require('../../coinFlip.js');

const mathSpy = jest.spyOn(Math, 'random');

afterAll(() => {
    mathSpy.mockRestore();
})

describe('Testing coinFlip logic: ', () => {

    it('Should return a winning outcome of HEADS', () => {
        mathSpy.mockImplementation(() => 1);

        let actual = coinFlip();
        let expected = 'A coin was flipped 1 time and the outcome was 100.0% HEADS';

        expect(actual).toEqual(expected);
    });


    it('Should return a winning outcome of TAILS', () => {
        mathSpy.mockImplementation(() => 0);

        let actual = coinFlip();
        let expected = 'A coin was flipped 1 time and the outcome was 100.0% TAILS';

        expect(actual).toEqual(expected);
    });


    it('Should flip a coin multiple times and return a plural outcome', () => {
        mathSpy.mockImplementation(() => 0);

        let actual = coinFlip(50);
        let expected = 'A coin was flipped 50 times and the outcome was 100.0% TAILS';

        expect(actual).toEqual(expected);
    });

});
