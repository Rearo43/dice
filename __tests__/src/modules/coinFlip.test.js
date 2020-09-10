'use strict';

const _ = require('lodash');
const CoinFlipper = require('../../../src/modules//coinFlip.js');
jest.mock('lodash');


describe('Testing CoinFlipper Class: ', () => {


    describe('Testing flip() method: ', () => {


        it('Should correctly parse command input and return correct message with HEADS ', () => {
            _.random.mockImplementation(() => 1);

            let mockInput = {
                channel_name: 'general',
                user_id: '12345',
                text: '',
            };

            let actual = CoinFlipper.flip(mockInput);
            let expected = 'A coin was flipped by <@12345> 1 time and the outcome was 100.0% HEADS';

            expect(actual).toEqual(expected);
        });


        it('Should correctly parse command input and return correct message with TAILS ', () => {
            _.random.mockImplementation(() => 0);
            _.isFinite.mockImplementation(() => true);

            let mockInput = {
                channel_name: 'general',
                user_id: '12345',
                text: '10',
            };

            let actual = CoinFlipper.flip(mockInput);
            let expected = 'A coin was flipped by <@12345> 10 times and the outcome was 100.0% TAILS';

            expect(actual).toEqual(expected);
        });


        it('Should correctly validate an incorrect text input', () => {
            _.random.mockImplementation(() => 0);
            _.isFinite.mockImplementation(() => false);

            let mockInput = {
                channel_name: 'general',
                user_id: '12345',
                text: 'I am not a number',
            };

            let actual = CoinFlipper.flip(mockInput);
            let expected = '/coinflip received an invalid parameter of "I am not a number". Please ensure the parameter is a number.';

            expect(actual).toEqual(expected);
        });
    });


    describe('Testing _executeFlips() method: ', () => {


        it('Should correctly return heads', () => {
            _.random.mockImplementation(() => 1);

            let mockInput = {
                times: 1,
                heads: 0,
                tails: 0,
            };

            CoinFlipper._executeFlips(mockInput);

            expect(mockInput.heads).toEqual(1);
            expect(mockInput.tails).toEqual(0);
            let actual = mockInput.heads + mockInput.tails;
            expect(actual).toEqual(mockInput.times);

        });


        it('Should correctly return tails', () => {
            _.random.mockImplementation(() => 0);

            let mockInput = {
                times: 1,
                heads: 0,
                tails: 0,
            };

            CoinFlipper._executeFlips(mockInput);

            expect(mockInput.heads).toEqual(0);
            expect(mockInput.tails).toEqual(1);
            let actual = mockInput.heads + mockInput.tails;
            expect(actual).toEqual(mockInput.times);

        });


        it('Should correctly flip 10 coins', () => {
            let index = 0;

            _.random.mockImplementation(() => {
                let testArr = [0, 0.77, 0.26, 1, 0.58, 0.82, 0.11, 0.99, 0.33, 0.65];
                return testArr[index++];
            });

            let mockInput = {
                times: 10,
                heads: 0,
                tails: 0,
            };

            CoinFlipper._executeFlips(mockInput);

            expect(mockInput.heads).toEqual(6);
            expect(mockInput.tails).toEqual(4);

            let actual = mockInput.heads + mockInput.tails;
            expect(actual).toEqual(mockInput.times);

        });
    });


    describe('Testing _caculateFlipResults method: ', () => {


        it('Should correctly determine HEADS as a winner ', () => {

            let mockInput = {
                times: 5,
                heads: 4,
                tails: 1,
            };

            CoinFlipper._calculateFlipResults(mockInput);

            expect(mockInput.winner).toEqual(CoinFlipper.HEADS);
            expect(mockInput.percentage).toEqual("80.0");

        });


        it('Should correctly determine TAILS as a winner ', () => {

            let mockInput = {
                times: 5,
                heads: 2,
                tails: 3,
            };

            CoinFlipper._calculateFlipResults(mockInput);

            expect(mockInput.winner).toEqual(CoinFlipper.TAILS);
            expect(mockInput.percentage).toEqual("60.0");

        });


        it('Should correctly determine a TIE as a winner', () => {

            let mockInput = {
                times: 6,
                heads: 3,
                tails: 3,
            };

            CoinFlipper._calculateFlipResults(mockInput);

            expect(mockInput.winner).toEqual(CoinFlipper.TIED);
            expect(mockInput.percentage).not.toBeDefined();

        });
    });


    describe('Testing _createMessage method: ', () => {


        it('Should handle a DM with one coin', () => {

            let mockInput = {
                times: 1,
                percentage: 100.00,
                winner: CoinFlipper.HEADS,
                channel_name: 'directmessage',
            };


            let actual = CoinFlipper._createMessage(mockInput);
            let expected = 'A coin was flipped 1 time and the outcome was 100% HEADS';

            expect(actual).toEqual(expected);

        });


        it('Should handle general chat coin flip', () => {

            let mockInput = {
                times: 10,
                percentage: 60.00,
                winner: CoinFlipper.TAILS,
                channel_name: 'general',
                user_id: '12345',
            };


            let actual = CoinFlipper._createMessage(mockInput);
            let expected = 'A coin was flipped by <@12345> 10 times and the outcome was 60% TAILS';

            expect(actual).toEqual(expected);

        });


        it('Should handle general chat coin flip', () => {

            let mockInput = {
                times: 10,
                winner: CoinFlipper.TIED,
                channel_name: 'general',
                user_id: '12345',
            };


            let actual = CoinFlipper._createMessage(mockInput);
            let expected = 'A coin was flipped by <@12345> 10 times and the outcome was a tie!';

            expect(actual).toEqual(expected);

        });

    });


});




