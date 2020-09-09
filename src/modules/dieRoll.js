'use strict';

const _ = require('lodash');

/**
 * 
 * @param {Object} command - object created when users post chats.
 */

function dieRoll(command) {
  // let userInput = command.text;
  //CHANGE ALL 'COMMANDS' TO userInput
  let mid = command.indexOf(' ');
  console.log(command);

  if(!command) {
    return`The number ${eachRoll()} was rolled.`;
  }

  else {
    let sides = parseInt(command.slice(0, mid));
    let rolls = parseInt(command.slice(mid, (command.length)));
    let answerBack = eachRoll(sides, rolls);

    return `The average sum of your die rolls is ${answerBack}.`;
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
   
  return (total / rolls);
}

module.exports = {dieRoll, eachRoll};
