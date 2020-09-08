'use strict';

const randomSpy = jest.spyOn(Math, 'random');

afterAll(() => {
  randomSpy.mockRestore();
});

it('Should roll the number 5', () => {
  randomSpy.mockImplementation(() => 5);

});
it('Should run defaults', () => {
  expect(dieRoll()).toBeGreaterThanOrEqual(1);
  expect(dieRoll()).toBeLessThan(7);
});

it('Should run defaults', () => {
  expect(dieRoll(3)).toBeGreaterThanOrEqual(1);
  expect(dieRoll(3)).toBeLessThan(4);
});
