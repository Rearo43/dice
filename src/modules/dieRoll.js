'use strict';

/**
 * 
 * @param {Object} command - object created when users post chats.
 */
function dieRoll(command) {
  let mid = command.indexOf(' ');
  console.log(command);

  if(!command) {
    console.log(`The number ${eachRoll()} was rolled.`);
    return`The number ${eachRoll()} was rolled.`;

  } 
  // else {
  //   let sides = parseInt(command.slice(0, mid));
  //   let rolls = parseInt(command.slice(mid, (command.length)));
  //   let answerBack = Math.floor(eachRoll(sides, rolls) / rolls);
  //   console.log(sides, rolls, answerBack);

  //   return `The average sum of your die rolls is ${answerBack}`;
  // }
}


/**
 * 
 * @param {Numeral} sides - either the default value of six or the users first input in their request.
 * @param {Numeral} rolls - either the default value of one or the users second input in their request.
 */
function eachRoll(sides = 6, rolls = 1) {
  let average = 0;

  for(let i = 0; i < rolls; i++) {
    let num = Math.floor(Math.random() * sides + 1);

    average += num;
  }
   
  return average;
}

module.exports = {dieRoll, eachRoll};
