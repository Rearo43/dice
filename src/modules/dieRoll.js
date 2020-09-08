'use strict';


function dieRoll(sides = 6, rolls = 1) {
  let average = 0;

  for(let i = 0; i < rolls; i++) {
    let num = Math.floor(Math.random() * sides + 1);

    average += num;
  }

  if(rolls === 1) {
    return`You rolled a/an ${average}`;
  } else {
    let answerBack = Math.floor(average / rolls);
    return `The average sum of your rolls is ${answerBack}`;
  }
}

module.exports = dieRoll;
