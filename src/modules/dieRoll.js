'use strict';

const _ = require('lodash');

/**
 * 
 * @param {Object} command - object created when users post chats.
 */

//user input '/dieroll two 3' <- want to change input to roll two die instead of choose sides

function dieRoll(command) {
  let userInput = command.text;
  let mid = userInput.indexOf(' ');

  if(!userInput) {
    return `:die-${eachRoll()}:`;
    // return`The number ${eachRoll()} was rolled.`;
  }

  // if()

  else {
    let sides = parseInt(userInput.slice(0, mid));
    let rolls = parseInt(userInput.slice(mid, (userInput.length)));
    let answerBack = eachRoll(sides, rolls);

    return `After ${rolls} rolls, the average of the dice rolled was... :die-${answerBack}:`;
    // return `The average sum of your die rolls is ${answerBack}.`;
  }
}


/**
 * 
 * @param {Numeral} sides - either the default value of six or the users first input in their request.
 * @param {Numeral} rolls - either the default value of one or the users second input in their request.
 */

function eachRoll(sides = 6, rolls = 1) {
  let total = 0;

  for(let i = 0; i < rolls; i++) {
    let num = _.random(1, sides);

    total += num;
  }
   
  return Math.floor(total / rolls);
}

module.exports = {dieRoll, eachRoll};
