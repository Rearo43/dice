'use strict';

const _ = require('lodash');

/**
 * dieRoll evaluates user input then executes helper function to return a string.
 * @param {Object} command object created when users post chats.
 * @returns {string} returns a string with die rolled or average of all dice rolled when the roll parameter is greater than one.
 */

//user input '/dieroll two 3' <- want to change input to roll two die instead of choose sides

function dieRoll(command) {
    let userInput = command.text;
    let mid = userInput.indexOf(' ');

    if (!userInput) {
        return `<@${command.user_id}> rolled ${eachRoll()}`;
    }

    else {
        let sides = parseInt(userInput);
        // let rolls = parseInt(userInput.slice(mid, (userInput.length)));
    

        // let sides = parseInt(userInput.slice(0, mid));
        // let rolls = parseInt(userInput.slice(mid, (userInput.length)));
        // let answerBack = eachRoll(sides, rolls);

        return `<@${command.user_id}> rolled ${eachRoll(sides)}`;
    }
}


/**
 * eachRoll acts as a helper function to generate a random number for the die roll outcome.
 * @param {Number} sides either the default value of six or the users first input in their request.
 * @param {Number} rolls either the default value of one or the users second input in their request.
 * @returns {String} returns the random number rolled or the average of all random numbers rolled when the parameter roll is greater than 1.
 */
function eachRoll(rolls = 1) {
//   let total = 0;
    let str = '';
    for (let i = 0; i < rolls; i++) {
        let num = _.random(1, 6);
        let newDie = `:die-${num}: `;

        str+= newDie;
    }

    return str;
}


module.exports = { dieRoll, eachRoll };
