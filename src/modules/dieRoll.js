'use strict';


function dieRoll(command) {
  // '/dieroll 12 1'
  let input = command.text;
  let mid = input.indexOf(' ');
  // let sides = parseInt(input.slice(0, mid));
  // let rolls = parseInt(input.slice(mid, (input.length)));
  console.log(sides, rolls);
  // command.text
  // let sides = 6;
  // let rolls = 1;
  let average = 0;
  function eachRoll(rolls = 6, sides = 1) {
    for(let i = 0; i < rolls; i++) {
      let num = Math.floor(Math.random() * sides + 1);
  
      average += num;
    }
  }

  if(!command.text){
    eachRoll();
  } else {
    let sides = parseInt(input.slice(0, mid));
    let rolls = parseInt(input.slice(mid, (input.length)));
  }

  // for(let i = 0; i < rolls; i++) {
  //   let num = Math.floor(Math.random() * sides + 1);

  //   average += num;
  // }

  if(rolls === 1) {
    return`You rolled a/an ${average}`;
  } else {
    let answerBack = Math.floor(average / rolls);
    return `The average sum of your rolls is ${answerBack}`;
  }
}

module.exports = dieRoll;

// function eachRoll(rolls = 6, sides = 1) {
//   for(let i = 0; i < rolls; i++) {
//     let num = Math.floor(Math.random() * sides + 1);

//     average += num;
//   }
// }