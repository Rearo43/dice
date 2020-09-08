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
const randomSpy = jest.spyOn(Math, 'random');

afterAll(() => {
  randomSpy.mockRestore();
});

it('Should roll the number 5', () => {
  
});
it('Should run defaults', () => {
  expect(dieRoll()).toBeGreaterThanOrEqual(1);
  expect(dieRoll()).toBeLessThan(7);
});

it('Should run defaults', () => {
  expect(dieRoll(3)).toBeGreaterThanOrEqual(1);
  expect(dieRoll(3)).toBeLessThan(4);
});
