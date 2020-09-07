'use strict';

const helper = require('./Util/helpers.js');

/**
 * Coin flip, will simulate flipping a two-sided coin. This coin has two sides, a heads and a tails. It will return a string message with the results.
 * @param {object} command Should be the incoming command object
 * @returns {string} String message containing the outcome of the flip(s)
 */
function coinFlip(command) {

    let body = {};
    body.channel_name = command.channel_name;
    body.user_id = command.user_id;
    body.text = command.text;
    body.times = 1;
    body.heads = 0;
    body.tails = 0;
    body.winner = '';


    if (body.text) {
        body.times = parseInt(body.text);
    };

    for (let i = 0; i < body.times; i++ ) {
        Math.random() > 0.50 ? body.heads++ : body.tails++;
    };

    body.heads > body.tails ? body.winner = 'heads' : body.winner = 'tails';

    return createMessage(body);
};


function createMessage(body) {
    let percentage = ((body[body.winner] / body.times) * 100 ).toFixed(1);
    let plural = body.times == 1 ? 'time' : 'times';
    let user = '';

    if (body.channel_name !== 'directmessage') {
        user = `<@${body.user_id}>`;
    }

    return `A coin was flipped ${user ? `by ${user} `: ''} ${body.times} ${plural} and the outcome was ${percentage}% ${body.winner.toUpperCase()}`;

}



module.exports = coinFlip;
