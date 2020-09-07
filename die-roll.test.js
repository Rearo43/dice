'use strict';


function dieRoll(sides = 6, rolls = 1) {
  let average = 0;

  for(let i = 0; i < rolls; i++) {
    let num = Math.floor(Math.random() * sides + 1);

    average += num;
  }

  if(rolls === 1) {
    return Math.floor(average);
    // `You rolled a/an ${average}`
  } else {
    return Math.floor(average / rolls);
    // `The average sum of your rolls is ${average}`
  }
}


//-------------------TEST
// import { mockRandom, resetMockRandom } from 'jest-mock-random';
 
// describe('Test with random usage', () => {
//   it('assigns random the values that we want to mock in order', () => {
//     mockRandom(0.1);
//     const actual = Math.random();
 
//     expect(actual).toEqual(0.1);
 
//     resetMockRandom();
//   });
// });

it('Should run defaults', () => {
  expect(dieRoll()).toBeGreaterThanOrEqual(1);
  expect(dieRoll()).toBeLessThan(7);
});

it('Should run defaults', () => {
  expect(dieRoll(3)).toBeGreaterThanOrEqual(1);
  expect(dieRoll(3)).toBeLessThan(4);
});
