'use strict';


/**
 * Coin flip, will simulate flipping a two-sided coin. This coin has two sides, a heads and a tails. It will return a string message with the results.
 * @param {number} times Times parameter indicates how many flips to be had. The default is set to one flip.
 * @returns {string} String message containing the outcome of the flip(s)
 */
function coinFlip(times=1) {

    let output = '';
    let heads = 0;
    let tails = 0;

    for (let i = 0; i < times; i++ ) {
        Math.random() > 0.50 ? heads++ : tails++;
    };

    output = heads > tails ? writeMessage('HEADS', heads, times) : writeMessage('TAILS', tails, times);

    return output
};


/**
 * This is a helper function for coinFlip. It has three parameters and will return an output message
 * @param {string} side This should be either "HEADS" or "TAILS" by who ever had the highest count
 * @param {*} count This should be the total count for the winning side
 * @param {*} times Times is the amount of flips for this coin flip
 * @returns {string} An output message
 */
function writeMessage(side, count, times) {
    let percentage = ((count / times) * 100).toFixed(1);
    let plural = times == 1 ? 'time' : 'times';
    return `A coin was flipped ${times} ${plural} and the outcome was ${percentage}% ${side}`;
};


module.exports = coinFlip;
