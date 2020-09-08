'use strict';

const _ = require('lodash');

/**
 * Coin Flipper Class to manage and handle the coin flipping logic
 * @class
 */
class CoinFlipper {

    static HEADS = 'heads';
    static TAILS = 'tails';
    static TIED = 'tied';


    /**
     * Flip executes all helper functions required to determine an outcome of flipping a coin
     * @param {object} command An object received from the Slack API
     * @static
     */
    static flip(command) {

        let body = {
            channel_name: command.channel_name,
            user_id: command.user_id,
            text: command.text,
            times: 1,
            heads: 0,
            tails: 0,
            winner: '',
            percentage: 0,
        };

        if (body.text) {

            body.times = parseInt(body.text);

            if (!_.isFinite(body.times)) {
                return `/coinflip received an invalid parameter of "${body.text}". Please ensure the parameter is a number.`;
            };

        };

        this._executeFlips(body);
        this._calculateFlipResults(body);
        return this._createMessage(body);

    };


    /**
     * Updates parameters on the body object based on the results of the _executeFlips() method
     * @param {object} body Object passed from flip method containing all necessary properties for this flip iteration.
     */
    static _executeFlips(body) {

        for (let i = 0; i < body.times; i++) {
            _.random(0, 1, true) > 0.50 ? body.heads++ : body.tails++;
        };

    };


    /**
     * Updates parameters on the body object based on the results of the _executeFlips() method
     * @param {object} body Object passed from flip method containing all necessary properties for this flip iteration.
     * @static
     */
    static _calculateFlipResults(body) {

        if (body.heads > body.tails) {
            body.winner = this.HEADS;
            body.percentage = ((body[body.winner] / body.times) * 100).toFixed(1);
        } else if (body.heads < body.tails) {
            body.winner = this.TAILS;
            body.percentage = ((body[body.winner] / body.times) * 100).toFixed(1);
        } else {
            body.winner = this.TIED;
        };


    };


    /**
     * After the body is built, _createMessage will produce a message and return it to the user.
     * @param {object} body Object passed from flip method containing all necessary properties for this flip iteration.
     * @static
     * @returns {string} Returns a string message for the
     */
    static _createMessage(body) {

        let plural = body.times == 1 ? 'time' : 'times';
        let user = '';

        if (body.channel_name !== 'directmessage') {
            user = `by <@${body.user_id}> `;
        } else {
            user = '';
        };

        if (body.winner === this.TIED) {
            return `A coin was flipped ${user}${body.times} ${plural} and the outcome was a tie!`
        } else {
            return `A coin was flipped ${user}${body.times} ${plural} and the outcome was ${body.percentage}% ${body.winner.toUpperCase()}`;
        };

    };

}


module.exports = CoinFlipper;
