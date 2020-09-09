'use strict';


function dieRoll() {
  let input = command.text;
  let mid = input.indexOf(' ');

  if(!command.text){
    return`The number ${eachRoll()} was rolled.`;

  } else {
    let sides = parseInt(input.slice(0, mid));
    let rolls = parseInt(input.slice(mid, (input.length)));
    let answerBack = Math.floor(eachRoll(sides, rolls) / rolls);

    return `The average sum of your die rolls is ${answerBack}`;
  }
}



function eachRoll(sides = 6, rolls = 1) {
  let average = 0;

  for(let i = 0; i < rolls; i++) {
    let num = Math.floor(Math.random() * sides + 1);

    average += num;
  }
   
  return average;
}

module.exports = {dieRoll, eachRoll};
